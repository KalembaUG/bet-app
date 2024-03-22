import React, { useState } from 'react';
import GroupHeading from './group-heading';
import GroupItem from './group-item';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSportEvents, selectSportsGroups, subscribeToSelectStore ,selectSportEvents, selectStatus,LOADING,FAILED,SUCCEEDED, IDLE, selectLeague} from '../../features/sports/sportsSlice';
import { leagueToCountry, mainGroupingsArray } from '../../constants';
import Canada from '../../assets/flags/usa.png'
import usa from '../../assets/flags/usa.png'
import australia from '../../assets/flags/australia.png'
import europe from '../../assets/flags/international.png'
import global from '../../assets/flags/usa.png'
import asia from '../../assets/flags/china.png'
import caribbean from '../../assets/flags/chile.png'
import india from '../../assets/flags/china.png'
import pakistan from '../../assets/flags/poland.png'
import england from '../../assets/flags/england.png'
import sweden from '../../assets/flags/sweden.png'
import africa from '../../assets/flags/international.png'
import argentina from '../../assets/flags/argentina.png'
import austria from '../../assets/flags/austria.png'
import belgium from '../../assets/flags/belgium.png'
import brazil from '../../assets/flags/brazil.png'
import chile from '../../assets/flags/chile.png'
import china from '../../assets/flags/china.png'
import southAmerica from '../../assets/flags/international.png'
import unitedKingdom from '../../assets/flags/international.png'
import denmark from '../../assets/flags/international.png'
import finland from '../../assets/flags/russian-federation.png'
import france from '../../assets/flags/france.png'
import germany from '../../assets/flags/germany.png'
import greece from '../../assets/flags/greece.png'
import italy from '../../assets/flags/italy.png'
import japan from '../../assets/flags/japan.png'
import southkorea from '../../assets/flags/international.png'
import ireland from '../../assets/flags/ireland.png'
import mexico from '../../assets/flags/mexico.png'
import netherlands from '../../assets/flags/netherlands.png'
import norway from '../../assets/flags/international.png'
import poland from '../../assets/flags/poland.png'
import portugal from '../../assets/flags/portugal.png'
import spain from '../../assets/flags/spain.png'
import Scotland from '../../assets/flags/scotland.png'
import switzerland from '../../assets/flags/switzerland.png'
import turkey from '../../assets/flags/turkey.png'

const mapCountryToIcons = {
    'Canada':Canada, 'United States':usa, 'Australia':australia, 'Europe':europe, 'Global':global, 'Asia':asia, 'Caribbean':caribbean, 'India':india, 'Pakistan':pakistan, 'England':england, 'Sweden':sweden, 'Africa':africa, 'Argentina':argentina, 'Austria':austria, 'Belgium':belgium, 'Brazil':brazil, 'Chile':chile, 'China':china, 'South America':southAmerica, 'Denmark':denmark, 'Finland':finland, 'France':france, 'Germany':germany, 'Greece':greece, 'Italy':italy, 'Japan':japan, 'South Korea':southkorea, 'Ireland':ireland, 'Mexico':mexico, 'Netherlands':netherlands, 'Norway':norway, 'Poland':poland, 'Portugal':portugal, 'Spain':spain, 'Scotland':Scotland, 'Switzerland':switzerland, 'Turkey':turkey, 'United Kingdom':unitedKingdom
}

const Group = ({ }) => {

    
    const store = useSelector(subscribeToSelectStore);
    const status = useSelector(selectStatus)

    const selected = store.selected;
    const groupsName = store.selectStoreArray[parseInt(selected)]
    const dispatch = useDispatch()

    //Drop down selected Group [football, basketBall ........]
    let groups = [];
    const countryGroups ={}
    if (store.store[groupsName]) {
        groups = store.store[groupsName].flat();
        
    }else{return}

    console.log('-------------', groups)
    const sportKeys = []
    for (let g of groups) {
        let key = g.key

        /**
         * store key
         */
        sportKeys.push(key)



        let country = leagueToCountry[key]
        if (country in countryGroups) {
            countryGroups[country].push(g)
        } else {
            countryGroups[country] = [g]
        }
    }


    if (status.events === IDLE) {
        dispatch(fetchSportEvents(sportKeys))
    }
     const countries = Object.keys(countryGroups)


    let popularCountries = mainGroupingsArray[1].countries;
    let otheCountries = countries.filter((c, i) => popularCountries.indexOf(c) === -1)

    let tournaments = mainGroupingsArray[0].leagues.map((l, i) => {
        return groups.find((g,i)=>g.key == l)
        
    });
    /**
     * filter to return only valid
     */
    tournaments = tournaments.filter((t, i) => {
        return t
    })



    return (
        <>
            
              
            <LeagueGroup leagues={tournaments} name={'Tournaments'} />
            <CountryGroup countries={popularCountries} countryGroups={countryGroups} name={'Popular Countries'} />
            <CountryGroup  countries={otheCountries} countryGroups={countryGroups} name ={'Other Countries'} />
            
                
          
        </>
    )

}


const LeagueGroup = ({leagues ,name,mainClassName='',subClassName='',imgSrc=''}) => {
    const [showDropDown, toggleDropDown] = useState(false);
    const dispatch = useDispatch()
    // console.log(leagues)
    return (
        <div>
            <GroupHeading groupName={name} imgSrc={imgSrc} showDropDown={showDropDown} className={mainClassName} onClick={(e)=>{toggleDropDown(!showDropDown)}} />
            {showDropDown && leagues.map((league) => {
                let imgSrc = ''
                if (leagueToCountry[league.key]) {
                    imgSrc = mapCountryToIcons[leagueToCountry[league.key]]
                }
                return (
                    <GroupItem key={league.id} imgSrc={imgSrc} className={subClassName} itemName={league.title} onClick={(e)=>{dispatch(selectLeague(league.key))}}/>
                )
            }) }
        </div>
    );
}

const CountryGroup = ({ name ,countries,countryGroups}) => {
    const [showDropDown, toggleDropDown] = useState(false);
    // console.log('countries  ',countries)
    // console.log('countryGroups',countryGroups)
    return (
        <>
        <GroupHeading groupName={name} showDropDown={showDropDown} onClick={(e) => { toggleDropDown(!showDropDown) }} />
            {showDropDown && countries.map((country, i) => {
                let imgSrc = ''
                if (mapCountryToIcons[country]) {
                    imgSrc = mapCountryToIcons[country]
                }
            return (
                <LeagueGroup imgSrc={imgSrc} key={i} leagues={countryGroups[country]} mainClassName='minor' name={country}/>
            )
        })}
        </>
    )
}

export default Group;

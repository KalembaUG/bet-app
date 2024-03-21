import React, { useState } from 'react';
import GroupHeading from './group-heading';
import GroupItem from './group-item';
import { useSelector } from 'react-redux';
import { selectSportsGroups, subscribeToSelectStore } from '../../features/sports/sportsSlice';
import { leagueToCountry ,mainGroupingsArray} from '../../constants';


const Group = ({ }) => {

    
    const store = useSelector(subscribeToSelectStore);
    const selected = store.selected;
    const groupsName = store.selectStoreArray[parseInt(selected)]

    //Drop down selected Group [football, basketBall ........]
    let groups = [];
    const countryGroups ={}
    if (store.store[groupsName]) {
        groups = store.store[groupsName].flat();
        
    }else{return}

    // console.log('-------------', groups)
    for (let g of groups) {

        let country = leagueToCountry[g.key]
        if (country in countryGroups) {
            countryGroups[country].push(g)
        } else {
            countryGroups[country] = [g]
        }
    }
    const countries = Object.keys(countryGroups)
    console.log(countryGroups)
    console.log(countries)
    let popularCountries = mainGroupingsArray[1].countries;
    let otheCountries = countries.filter((c, i) => popularCountries.indexOf(c) === -1)

    let tournaments = mainGroupingsArray[0].leagues.map((l, i) => {
        return groups.find((g,i)=>g.key == l)
        
    });
    tournaments = tournaments.filter((t, i) => {
        return t
    })
    // console.log('==============',tournaments)
    console.log('+++++++++++++',otheCountries)
    console.log('-------------',popularCountries)
    return (
        <>
            
              
            <LeagueGroup leagues={tournaments} name={'Tournaments'} />
            <CountryGroup countries={popularCountries} countryGroups={countryGroups} name={'Popular Countries'} />
            <CountryGroup  countries={otheCountries} countryGroups={countryGroups} name ={'Other Countries'} />
            
                
          
        </>
    )

}


const LeagueGroup = ({leagues ,name,mainClassName='',subClassName=''}) => {
    const [showDropDown, toggleDropDown] = useState(false);
    // console.log(leagues)
    return (
        <div>
            <GroupHeading groupName={name} showDropDown={showDropDown} className={mainClassName} onClick={(e)=>{toggleDropDown(!showDropDown)}} />
            {showDropDown &&  leagues.map((league) => {
                return (
                    <GroupItem key={league.id} className={subClassName} itemName={league.title}/>
                )
            }) }
        </div>
    );
}

const CountryGroup = ({ name ,countries,countryGroups}) => {
    const [showDropDown, toggleDropDown] = useState(false);
    console.log('countries  ',countries)
    console.log('countryGroups',countryGroups)
    return (
        <>
        <GroupHeading groupName={name} showDropDown={showDropDown} onClick={(e) => { toggleDropDown(!showDropDown) }} />
        {showDropDown &&  countries.map((country,i) => {
            return (
                <LeagueGroup key={i} leagues={countryGroups[country]} mainClassName='minor' name={country}/>
            )
        })}
        </>
    )
}

export default Group;

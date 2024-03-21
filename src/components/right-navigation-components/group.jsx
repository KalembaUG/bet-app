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
    return (
        <>
            {countries.map((country, i) => {
                return (
                    <CountryGroup leagues={countryGroups[country]} name={country} />
                )
            })}
        </>
    )

}


const CountryGroup = ({leagues ,name}) => {
    const [showDropDown, toggleDropDown] = useState(false);
    console.log(leagues)
    return (
        <div>
            <GroupHeading groupName={name} showDropDown={showDropDown} onClick={(e)=>{toggleDropDown(!showDropDown)}} />
            {showDropDown &&  leagues.map((league) => {
                return (
                    <GroupItem key={league.id} itemName={league.title}/>
                )
            }) }
        </div>
    );
}

export default Group;

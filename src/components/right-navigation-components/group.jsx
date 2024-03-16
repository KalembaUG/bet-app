import React from 'react';
import GroupHeading from './group-heading';
import GroupItem from './group-item';
import { useSelector } from 'react-redux';
import { selectSportsGroups, subscribeToSelectStore } from '../../features/sports/sportsSlice';


const Group = ({  }) => {
    const store = useSelector(subscribeToSelectStore);
    // console.log(store);
    const selected = store.selected;
    // console.log('***********',parseInt(selected))
    const groupsName = store.selectStoreArray[parseInt(selected)]
    // console.log(groupsName)
    let groups = [];
    if (store.store[groupsName]) {
        // console.log(groups)
        groups = store.store[groupsName].flat();
        
    }else{return}

    return (
        <div>
            <GroupHeading groupName={groupsName} />
            {groups.map((sport) => {
                // console.log('******sp',sport)
                return (
                    <GroupItem key={sport.id} itemName={sport.details}/>
                )
            })}
        </div>
    );
}

export default Group;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {selectSport, subscribeToSelectStore } from '../../features/sports/sportsSlice';



const SportSelectConatainer = () => {

    const dispatch = useDispatch()
    const selectStore = useSelector(subscribeToSelectStore);

    const indexOfFootball = selectStore.selected;
    const selectStoreArry = selectStore.selectStoreArray;

    console.log('select store array ',selectStoreArry)
    const selectHandleChange = (e) => {
        dispatch(selectSport(e.target.value))
        // console.log(e.target.value)

    }
    
    

console.log(indexOfFootball)

    
    const OptionItem = ({ name ,value ,selected}) => {
        return (
            <option className='sport-opt' value={value} selected={selected}>{name}</option>
        )
    }

    return (
        <div className='sport-select-conatiner'>
            <div className='sport-select-wrapper'>

            <select name="sportSelect" id="sportSelect" onChange={selectHandleChange} className='sport-select'>
                    {selectStoreArry.map((name, i) => {
                        // console.log(i)
                        if (name === "Football" || name === "Basketball" || name === "Tennis") {
                            return <OptionItem selected={i.toString() === indexOfFootball.toString()} value={(i).toString()} name={name} key={i} />
                        }
                        })
                    }
            </select>
            
            </div>
        </div>
    );
}

export default SportSelectConatainer;

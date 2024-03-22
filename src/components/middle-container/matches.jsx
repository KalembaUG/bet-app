import React from 'react';

import exampleMatches from './exampleMatches.json'
import {DotLoader} from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux';
import { FAILED, IDLE, INITIAL, LOADING, SUCCEEDED, fetchSportEvents, getSelectedLeague, selectLeague, selectSportEvents, selectStatus } from '../../features/sports/sportsSlice';
import { setSpinnerState } from '../../features/spinner/spinnerSlice';
import { format } from 'date-fns';






const MatchItem = ({ match }) => {

    // Provided time string
const timeString = match.commence_time;

// Parse the provided time string into a Date object
const dateObject = new Date(timeString);

// Format the time
const formattedTime = format(dateObject, "hh:mma");

// Format the date
const formattedDate = format(dateObject, "EEE dd/MM");

    return (
        <div className='match-item'>
            <div className="time-row"><span className='hours'>{formattedTime}</span><span className="date">{formattedDate}</span></div>
            <div className="teams">

        <span className='team-name'>{match.home_team}</span> 
        <span className='team-name'>{match.away_team}
            </span>
            </div>
        </div>
    )
}

export const Spinner = () => {
    return (
        <div className="spinner-rapper">

        <div className="spinner">

            <DotLoader color="#02104f" />
        </div>
        </div>
    )
}


const Matches = () => {
    const status = useSelector(selectStatus);
    let selectedLeague = useSelector(getSelectedLeague);
    const sportEvents = useSelector(selectSportEvents);
    const dispatch = useDispatch();
    let matches = [];

    console.log('=================== league', selectedLeague);

    
    if (!selectedLeague) {
        selectedLeague = "soccer_epl"
        dispatch(selectLeague(selectedLeague))
    }
    console.log(sportEvents)
    if (!sportEvents[selectedLeague] || Object.keys(sportEvents[selectedLeague]).length ===0) {
        console.log('there is no ththththt',status)
        return ''
    } else {
        console.log('-------__-___---_--__', status, sportEvents[selectedLeague])
        dispatch(setSpinnerState(false))
        matches = sportEvents[selectedLeague]
    }

    return (
        <div>
            {matches.map((match) => {
                console.log(match)
                
                return (
                    <div><MatchItem match={match}/></div>
                )
            })}  
        </div>
    );
}

export default Matches;

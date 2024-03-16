import React from 'react';

import exampleMatches from './exampleMatches.json'


const matches = Object.values(exampleMatches);


const MatchItem = ({ match }) => {
    return (
        <div>{match.id}</div> 
    )
}

const Matches = () => {
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

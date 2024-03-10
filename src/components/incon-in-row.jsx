import React from 'react';

const InconInRow = ({image,name,checked=false}) => {
    return (
        <div className={checked ? "icon-in-row checked" : "icon-in-row"}>
            <div className='icon'>
                <img src={image} alt={name} />
            </div>
            <span>{name}</span>
        </div>
    );
}

export default InconInRow;

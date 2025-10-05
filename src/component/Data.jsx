import React, { use } from 'react';

const Data = ({showData}) => {
    const displayData = use(showData);
    
    return (
        <div>
            {
                displayData.map(display => <div>
                    <h1>{display.title}</h1>
                    <img src={display.image} alt="" />
                </div>)
            }
        </div>
    );
};

export default Data;
import React from 'react';
//DayBox
const Calen = ({calender}) => {
    console.log(calender)
    return (
        <div className="px-4 mt-4 mb-2">
            <button className="hover:bg-sky-700 hover:text-white focus:bg-sky-400 focus:text-white rounded pr-1 border border-indigo-600">
           <h2>{calender.Date}</h2>
           <p>${calender.Price}</p> 
            </button>
        </div>
    );
};

export default Calen;
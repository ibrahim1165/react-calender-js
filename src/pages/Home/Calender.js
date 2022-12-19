import React, { useEffect, useState } from 'react';
import Calen from './Calen';
//MonthBo
const Calender = () => {
    const [calenders,setCalenders] =useState([])
    useEffect(()=>{
        fetch('calender.json')
        .then(res=>res.json())
        .then(data=>{
            setCalenders(data)
        })
    },[])
   
    return (
        <>
        <div className="text-2xl font-bold mt-16 pl-16">
            <h2>Calender</h2>
        </div>
          <div className="flex gap-[4%] pl-[2.8%]">
            <p>Su</p>
            <p>Mo</p>
            <p>Tu</p>
            <p>We</p>
            <p>Th</p>
            <p>Fr</p>
            <p>Sa</p>
          </div>
            <div className="grid lg:grid-cols-7 grid-cols-4  lg:w-[35%] lg:shadow mx-10">
                {calenders.map(calender=>
                <Calen key={calender.id} 
                calender={calender}
                >

                </Calen>
                )
                
                }
                </div> 
        </>
    );
};

export default Calender;
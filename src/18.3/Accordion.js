import { getByLabelText } from '@testing-library/react';
import React, { useState } from 'react';

const Accordion = () => {
    const [time, setTime] = useState([0,0,0]);

    const onChangeHandle = (index,value) => {
        const newArr = [...time];
        newArr[index] = value;
        if(index===0){
            newArr[1] = newArr[0]*60;
            newArr[2]= newArr[0]*600
        }
        else {
            if(index===1){
                newArr[0]=newArr[1]/60;
                newArr[2]=newArr[1]*60
            }
            else{
                newArr[0]=newArr[2]/60/60;
                newArr[1]=newArr[2]/60;
            }
        }
        setTime(newArr);
    };

    return <div>
       <label> hours
        <input value = {time[0]} onChange ={(e)=>onChangeHandle(0,e.target.value)}/>
        </label>
        <br/>
        <label> minuts
        <input value = {time[1]} onChange ={(e)=>onChangeHandle(1,e.target.value)}/>
        </label>
        <br/>
        <label> seconds
        <input value = {time[2]} onChange ={(e)=>onChangeHandle(2,e.target.value)}/>
        </label>
    </div>;
};

export default Accordion;

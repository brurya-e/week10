import React, { useState, useEffect } from 'react';
import './Accordion.css'

const Accordion = ({tasks}) => {

   const [status, setStatus] = useState([]);
//set initial state
   useEffect(() => { 
      if(tasks.length > 0) {
      const initialState = tasks.map(obj => obj.completed);
      console.log(initialState)
      setStatus(initialState);
    }
  }, [])


  const onStatusClick = (index) => { 
      const newArr = [...status];
      newArr[index] = !newArr[index];
      setStatus(newArr);
}

        const renderedItems = tasks.map((item, index) => {
            const icon = status[index] ? "fas fa-check" : "far fa-window-close"
            const classN = status[index] ? "compleat" : " "

            return (
                <React.Fragment key={item.name}>
                    <div className={`title ${classN}`}>
                        {item.name} - {item.completed} <i className={icon} onClick={() => onStatusClick(index)}></i>
                    </div>
                </React.Fragment>
            );
        });

        return <div>
            {renderedItems}

        </div>;
    };

    export default Accordion;

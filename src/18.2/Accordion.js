import React, { useState, useEffect } from 'react';
import './Accordion.css'

const Accordion = ({tasks}) => {

   const [status, setStatus] = useState(tasks);
//set initial state
//    useEffect(() => { 
//       if(tasks.length > 0) {
//       const initialState = tasks.map(obj => obj.completed);
//       setStatus(initialState);
//     }
//   }, [])


  const onStatusClick = (index) => { 
      const newArr = [...status];
      newArr[index].completed = !newArr[index].completed;
      setStatus(newArr);
}

        const renderedItems = status.map((item, index) => {
            const icon = item.completed ? "fas fa-check" : "fas fa-times"
            const classN = item.completed ? "compleat" : " "

            return (
                <React.Fragment key={item.name}>
                    <div className={`title ${classN}`}>
                        {item.name} : {item.completed} <i className={icon} onClick={() => onStatusClick(index)}></i>
                    </div>
                </React.Fragment>
            );
        });

        return <div>
            {renderedItems}

        </div>;
    };

    export default Accordion;

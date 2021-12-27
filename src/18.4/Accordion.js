import React, { useState, useEffect } from 'react';

const Accordion = ({ arr }) => {
    const [checked, setCheck] = useState([]);
    const [visable, setVisable] = useState([]);

    //set initial state
    useEffect(() => {
        if (arr.length > 0) {
            const initialStateChecked = arr.map(obj => false);
            const initialStateVisable = arr.map(obj => true);
            setCheck(initialStateChecked);
            setVisable(initialStateVisable);
        }
    }, [])



    const handleInputChange = (index, value) => {
        const newArr = [...checked];
        newArr[index] = !newArr[index];
        setCheck(newArr);
    };

    const deleate = () => {
        const newArr = [...visable];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = !checked[i];
        }
        setVisable(newArr);
    }

    const reset = () => {
        const initialStateChecked = arr.map(obj => false);
        const initialStateVisable = arr.map(obj => true);
        setCheck(initialStateChecked);
        setVisable(initialStateVisable);
    }

    const renderedItems = arr.map((item, index) => {

        return (
            <React.Fragment key={index}>
                <div className={`title`} style={{ display: visable[index] ? "block" : "none" }}>
                    <label>
                        <input name={item} type="checkbox"
                            checked={checked[index]}
                            onChange={(e) => handleInputChange(index, e.name)} />
                        {item}
                    </label>
                </div>
            </React.Fragment>
        );
    });


    return <div>
        {renderedItems}
        <button onClick={deleate} >
            deleate
        </button>
        <button onClick={reset}>
            reset
        </button>

    </div>;
};

export default Accordion;

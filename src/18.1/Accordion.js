import React, { useState } from 'react';

const Accordion = ({ str, len }) => {
    const [length, setLen] = useState(len);
    const [active, setActiv] = useState('less');


    const onMoreClick = () => {
        setLen(str.length);
        setActiv('more')
    };
    const onLessClick = () => {
        setLen(len);
        setActiv('less')

    };


    const renderedItems = str.filter((l, index) => {
        if (index <= length)

            return (
                <React.Fragment key={index}>
                    {l}
                </React.Fragment>
            );
    });

    return <div>
        {renderedItems}

        {active === 'less' &&
            <div onClick={() => onMoreClick()} >
                read -more
            </div>
        }
        {active === 'more' &&

            <div onClick={() => onLessClick()} >
                read -less
            </div>
        }
    </div>;
};

export default Accordion;

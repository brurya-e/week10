import React, { useState, useEffect, useRef } from 'react';

const ColorPic = () => {

  const Active = '../img/1color';
  const Inactive = '../img/1bandw.png';

  const [active, setActive] = useState(false);
  const imageRef = useRef();

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };


  return (
    <>
      <div className="toggle-wrapper"
      ref={imageRef}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}>
        {active ? (
          <img
            className="active"
            src={Active}
            alt="color"
            onClick={() => handleChangeActive()}
          />
        ) : (
          <img
            className="inactive"
            src={Inactive}
            alt="black and white "
            onClick={() => handleChangeActive()}
          />
        )}
      </div>
      <div className="toggle-wrapper"
        
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}>
        {active ? (
          <img
            className="active"
            src={Active}
            alt="color"
            onClick={() => handleChangeActive()}
          />
        ) : (
          <img
            className="inactive"
            src={Inactive}
            alt="black and white "
            onClick={() => handleChangeActive()}
          />
        )}
      </div>
    </>
  );
}



export default ColorPic;

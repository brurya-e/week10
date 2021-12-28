import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Avatar = () => {
  const [display, setDisplay] = useState(true);
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const call = async () => {
      await axios.get(`https://randomuser.me/api/?results=10`, {
        cancelToken: source.token
      }).then((response) => {
        setAvatars(response.data.results);
      }).catch((error) => {
        if (axios.isCancel(error)) return;
      });
      return () => source.cancel();
    }
    if (!display) {
      call()
    }

  }, [display]);

 
    const renderedAvatars = avatars.map((item) => {
      return (
        <div key={item.id.value} className="item">
          <div className="content">
            <div className="header">{item.name.first}</div>
            <img url={item.picture.medium} alt =''></img>
          </div>
        </div>
      );
    });
  

  return (
    <div>
      {display && <div>
        <button onClick={() => setDisplay(false)}> Display data </button>
      </div>}

      {!display && <div>
        <button onClick={() => setDisplay(true)}> Hide data </button>
        <div className="ui form">
          <div className="ui celled list">{renderedAvatars}</div>
        </div>
      </div>}
    </div>
  );
};

export default Avatar;

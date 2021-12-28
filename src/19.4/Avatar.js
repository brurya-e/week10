import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Avatar = () => {
  const [term, setTerm] = useState('');
  // const [serch, setSerch] = useState('hooks');
  const [avatars, setAvatars] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => { //only once
    const search = async () => {
      setSpinner(true);
      await axios.get(`https://randomuser.me/api/?results=10`).then((response) => {
        console.log(response.data)
        setAvatars(response.data.results);
        setSpinner(false);
      }).catch((e) => { console.log(e) });
    }
    search();
  }, [])


  useEffect(() => { //every time term change

  
  }, [term])

  const renderedAvatars = avatars.map((item) => {
    return (
      <div key={item.id.value} className="item">
        <div className="content">
          <div className="header">{item.name.first}</div>
          <img url ={item.picture.medium}></img>
        </div>
      </div>
    );
  });

  return (
    <div>
      {spinner &&
        <div> Loding.....</div>}
      <div className="ui form">
        <div className="field">
          <label>Enter Search Avatar</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedAvatars}</div>
    </div>
  );
};

export default Avatar;

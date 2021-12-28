import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataComponenet = () => {

  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const call = async () => {
      await axios.get(`https://api.chucknorris.io/jokes/random`, {
        cancelToken: source.token
      }).then((response) => {
        setJoke(response.data.value);
      }).catch((error) => {
        if (axios.isCancel(error)) return;
      });
      return () => source.cancel();
    }
      call()
  }, []);

  return (
    <div>
      {joke}
    </div>
  )

}

const Joke = () => {

  const [display, setDisplay] = useState(true);
 
  return (
    <div>
      {display && <div>
        <button onClick={() => setDisplay(false)}> Display data </button>
      </div>}

      {!display && <div>
        <button onClick={() => setDisplay(true)}> Hide data </button>
        <div>
          <DataComponenet />
        </div>
      </div>}
    </div>
  );
};

export default Joke;

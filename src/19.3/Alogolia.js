import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Alogolia = () => {
  const [term, setTerm] = useState('');
  const [serch, setSerch] = useState('hooks');
  const [results, setResults] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const search = async () => {
      setSpinner(true);
      await axios.get(`https://hn.algolia.com/api/v1/search?query=${serch}`).then((response) => {
      setResults(response.data.hits);
        setSpinner(false);
      }).catch((e) => {console.log(e) });
    }
    search();
}, [serch])

const renderedResults = results.map((hits, index) => {
  return (
    <div key={index} className="item">
      <div className="content">
        <div className="header">{hits.title}</div>
        <a herf={hits.url}> <div className="header">{hits.url}</div></a>
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
        <label>Enter Search Term 19.3</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
        <button onClick={() => setSerch(term)}> Serch</button>
      </div>
    </div>
    <div className="ui celled list">{renderedResults}</div>
  </div>
);
};

export default Alogolia;

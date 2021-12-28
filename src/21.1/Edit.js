import React, { useState, useEffect, useRef } from 'react';

const Edit = () => {
  const [term, setTerm] = useState('');
  const [edit, setEdit] = useState(true);

  const inputRef = useRef()

  useEffect(() => {
    if (!edit)
      inputRef.current.focus();

  }, [edit]);


  return (
    <div>
      <div className="ui form">
        <div className="field">
          {edit &&
            <button onClick={() => setEdit(false)}>edit</button>
          }
          {!edit &&
            <div>
              <input
                ref={inputRef}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="input"
              />
              <button onClick={() => setEdit(true)}>save</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Edit;

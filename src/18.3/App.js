import React from "react";
import Accordion from "./Accordion";
const str ='ghghgbhghghghghghghghghgh    vbbvb  vbvbv   gh'
 const len = 10

const App = () => {
  return (
    <div>
      <Accordion str={str.split('')} len ={len} />
    </div>
  );
};
export default App;

import React from "react";
import Accordion from "./Accordion";
const arr=["one", "two", "three", "four", "five"];
const App = () => {
  return (
    <div>
      <Accordion arr={arr} />
    </div>
  );
};
export default App;

import React from "react";
import Accordion from "./Accordion";
const tasks =[
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
  ]
  

const App = () => {
  return (
    <div>
      <Accordion tasks={tasks}/>
    </div>
  );
};
export default App;

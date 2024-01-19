import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComonent';
function App() {
  const [data, setData] = useState("intialdata")
  return (
    <div className="App">
      <ChildComponent />
      <ParentComponent data={data} />
      <button onClick={setData("updated data")}>button</button>
    </div>
  );
}

export default App;

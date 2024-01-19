import React from 'react';
// import ChildComponent from './ChildComonent';
const ParentComponent = (props) => {

    // const handleDataFromChild = (data) => {
    //     // Use the data received from the child
    //     console.log("Data from child:", data);
    //   };
    
    console.log("props",props)
  return (
    <>
        <div>parent component</div>

      {/* <div>core redux</div>
      <div>
        <button>add</button>
        <button>remove</button>
      </div> */}
      {/* <ChildComponent sendDataToParent={handleDataFromChild} /> */}
    </>
  );
};

export default ParentComponent;

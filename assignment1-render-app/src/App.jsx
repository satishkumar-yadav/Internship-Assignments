import { useState } from "react";

import './app.css';
import { sculptureList } from "./data";

function App() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  //A state variable to retain the data between renders
  // A state setter function to update variable and trigger React to render the component again 

  function handleClick(){
    setIndex(index + 1)
  } // event handler is updating the local variable, index. 

  let sculpture = sculptureList[index];
  

  function handleMoreClick(){
    setShowMore(!showMore) // fasle -> true, true -> false
  }// just another event handler that will help us to show the description 
  return (
    <>
      <button onClick={handleClick}>next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

     <p>Click the Image below to get its Description.</p>

       <img  
        id="image"
        onClick={handleMoreClick}  
        src={sculpture.url}
        alt={sculpture.alt}
        title="Click to get detailed description"
      /> 
    

      <br></br>
      {/* <button onClick={handleMoreClick}>
        {showMore ? "Hide" : 'Show'} details
      </button> */}
        {showMore && <p>{sculpture.description}</p>}
        
        {/* showmore -> true */}
        {/*conditional rendering */}
    </>
  );
}

// show -> true => show the content 
// showmore -> false => hide the content

export default App;


// useState, as well as any other function starting with "use", is called Hook. 


// Assignment -> make image clickable to show the description of the image 
// Post it on github 
import React from 'react'
import Note from './components/note'
function App({notse}) {

//  function handleSaveClick(event){
//   console.log(event);
//   event.preventDefault();
//   console.log("Butto clicked");
//  }
  
  return (
    <div>
    <h1>Notes</h1>
    <ul>
    { notse.map(note=>
      <Note key={note.id} notse={note}/>
    ) }
    </ul>


    <form >
      <input/>
      <button onClick={(event)=>{
        event.preventDefault();
        console.log("sve button clicked function inside the onclick event")
      }}>Save note</button>
    </form>
    </div>
    
  )
}

export default App
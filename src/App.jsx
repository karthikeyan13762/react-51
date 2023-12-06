import React from 'react'
import Note from './components/note'
function App({notse}) {

 function addNotes(event){
  console.log(event);
  event.preventDefault();
  console.log("test");
 }
  
  return (
    <div>
    <h1>Notes</h1>
    <ul>
    { notse.map(note=>
      <Note key={note.id} notse={note}/>
    ) }
    </ul>


    <form onSubmit={addNotes}>
      <input/>
    </form>
    </div>
    
  )
}

export default App
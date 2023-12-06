import React from 'react'

import Note from './components/note';
function App({notse}) {

  console.log(notse);
  return (
   <div>
    <h1>Headings</h1>
    <u>
      {

        notse.map(notes=>{
          return( <Note key={notes.id} notes={notes} />
)
         
        }
       )


      }
    </u>

   </div>
   
   
  )
}

export default App
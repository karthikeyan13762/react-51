import React from 'react'
import Note from './components/note';
function App({notse}) {
  console.log(notse);
  return (
    <>

    <h1>Notes</h1>
    <ul>
    {notse.map(notse=>{


      return <Note key={notse.id} notse={notse}/>



    })


    }
    </ul>
    </>
    
  )
}

export default App
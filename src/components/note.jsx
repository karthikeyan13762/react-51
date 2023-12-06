

import React from 'react'

function Note({notes}) {
    console.log(notes);
  return (
  <li>{notes.content}</li>
  )
}

export default Note;
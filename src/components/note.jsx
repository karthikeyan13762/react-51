import React from 'react'

function Note({notse}) {
  return (
    <li>{notse.content}{notse.important&&"★"}</li>
  )
}

export default Note;
import React from 'react'

function Note({notse}) {
  return (
    <li>{notse.important?notse.content+"★":notse.content}</li>
  )
}

export default Note
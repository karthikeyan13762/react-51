import React from 'react'

function Note({notse}) {
  if(notse.important){
 
    return (
        <li>{notse.content}☆</li>
        )
  }else{
    return (
        <li>{notse.content}</li>
        )
  }
  
   
}

export default Note;
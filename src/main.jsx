import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes=[
   {
      id:1,
      content:'Working with lists',
      import:true
   },
   {
      id:2,
      content:'Usage of Keys',
      import:false
   },
   {
      id:3,
      content:'Conditional rendering',
      import:true
   },
   {
      id:4,
      content:'Handling Events',
      import:true
   },
   {
      id:5,
      content:'Props Vs State',
      import:false
   }
]
ReactDOM.createRoot(document.getElementById('root')).render(
 
   <App notes={notes} />
 
)

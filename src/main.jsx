import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const notse=[
   {id:1,content:"Working wirh lists",important:true},
   {id:2,content:"i usage of keys",important:true},
   {id:3,content:"conditional rendering",important:true},
   {id:4,content:"Handling events",important:true},
   {id:5,content:"Props vs state",important:true}
]

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <App notse={notse}/>
 
)

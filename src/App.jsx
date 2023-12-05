
function Hello(props) {
  console.log(props);
  return(
    <p>Hello{props.userName}</p>
  )
}




function App(){

let user1="Karthi";
let user2="Karthikeyan";


  return(
    <div>
      <h1>Gretings</h1>
      <Hello userName={user1}/>
       <Hello userName={user2}/>
    </div>
  )
}
export default App;
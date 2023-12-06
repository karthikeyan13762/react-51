

function Hello(props){
  console.log(props);

  return(

    <p>{props.name} your age is {props.age}</p>

  )


}


function App(){

  return(
    <div>
    <Hello name ="Karthi"  age={25} />
    <Hello  name ="KarthiKeyan" age={26}  />
    </div>
    
  )

}

export default App;
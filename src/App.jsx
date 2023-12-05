
function App(){
  let now =new Date()
  console.log(now);
  let nowdate=now.toString();


  let a=10;
  let b=15;


  return(
    <div>
      <h1>Hello World it id {nowdate}</h1>
      <p>a+b is {a+b}</p>
    </div>
  )
}
export default App;
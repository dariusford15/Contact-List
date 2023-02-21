import './App.css';
import React ,{useState, useEffect} from'react'
import ContactCard from './components/ContactCard';

function App() {
  const title = "Contact List";
  {/*const contacts = [
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Jenny Han",
      email: "jennyhan@notreal.com",
      age: 25
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Paul Jones",
      email: "paul.jones@notreal.com",
      age: 33
    },
    {
      avatarUrl: "https://via.placeholder.com/150",
      name: "Peter Pan",
      email: "peter.pan@notreal.com",
      age: 100
    }
]*/}
const [results,setResults] = useState([])

useEffect(()=>{
fetch("https://randomuser.me/api/?results=10")
//pass in a function that takes a response
.then(response => response.json())
//take the data that we get from the json response and output it in our console
.then(data => {
  console.log(data)
  setResults(data.results)
  })
}, [])
  return (
    <div className="App">
      <h1>{title}</h1>
      {results.map((result, index)=>{
        return(
        <ContactCard 
        key={index}
        name={result.name.first}
        email={result.email}
        avatarUrl={result.picture.large}
        age={result.dob.age}/>
        )
      })}
      
     {/*} <ContactCard 
        name="Paul Jones" 
        email="paul.jones@notreal.com"
        avatarUrl="https://via.placeholder.com/150"
        age={25}/>
        <ContactCard 
        name="Peter Pan" 
        email="peter.pan@notreal.com"
        avatarUrl="https://via.placeholder.com/150"
        age={100}/>
    */}
      
      </div>
  );
}

export default App;

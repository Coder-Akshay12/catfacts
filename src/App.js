import {useState, useEffect} from 'react'
import Axios from 'axios'

function App() {

  const [catFact, setCatFact] = useState('');

  const fetchFacts = () =>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      setCatFact(res.data.fact);
    });
  }
  
  useEffect(()=>{
    fetchFacts();
  },[]);
  return (
    <div className="App">
      <div className="container"><p>{catFact}</p></div>
      <button onClick={fetchFacts}>Get a Cat Fact</button>
    </div>
  );
}

export default App;

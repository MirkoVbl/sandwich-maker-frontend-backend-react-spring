import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import SandwichOverview from "./components/SandwichOverview";
import CreateSandwich from "./components/CreateSandwich";
import {Sandwich} from "./model/Sandwich";

function App() {

  const [sandwiches, setSandwiches] = useState([]);


  useEffect ( () => {
    loadSandwiches()

  } , [] )

  const loadSandwiches = () => {
    axios.get("/api/sandwich/")
        .then((response) => response.data)
        .then((sandwiches) => setSandwiches(sandwiches))
  }

  const addSandwich = (newSandwich: Sandwich) => {

    axios.post("/api/sandwich", newSandwich)
        .then(loadSandwiches)
  }

  const deleteSandwich = (id: string) => {

    axios.delete("/api/sandwich/" + id)
        .then(loadSandwiches)
  }

  return (
      <div className="App">
        <header className="App-header">
          <h1>Burger Time</h1>
          <div>
            {sandwiches.length=== 0
                && <h3>New Order</h3>}
          </div>
          <SandwichOverview sandwiches={sandwiches} deleteSandwich={deleteSandwich}/>
          <CreateSandwich addSandwich={addSandwich} />
        </header>

      </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route} from "react-router-dom"
import axios from "axios"

import Home from "./container/Home"
import Popup from "./container/Popup"

function App() {
  const [state, setState] = useState({
    s: "batman",
    results: [],
  })

  useEffect(() => {
    axios(apiurl + "&s=" + state.s)
    .then(({ data }) => {
      let results = data.Search;
      setState(prevState => {
        return {
          ...prevState,
          results: results
        }
      })
    })
  }, []);

  const apiurl = "http://www.omdbapi.com/?apikey=8f48db75";

  const search = e => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s)
      .then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return {
            ...prevState,
            results: results
          }
        })
      })
    }
  }

  const handleInput = e => {
    let s = e.target.value;
    
    setState(prevState => {
      return {
        ...prevState,
        s: s,
      };
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <BrowserRouter>
          <Route 
              exact 
              path="/" 
              render={(routeProps) => <Home {...routeProps} 
                                            handleInput={handleInput} 
                                            search={search}
                                            results={state.results} />}
          />
          <Route exact path="/films/:id" render={(routeProps) => <Popup {...routeProps} apiurl={apiurl}/>} />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;

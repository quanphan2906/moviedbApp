import React, { useState, useEffect } from 'react'
import axios from "axios"

import Search from "./components/Search"
import Results from "./components/Results"
import Popup from "./components/Popup"

function App() {
  const [state, setState] = useState({
    s: "batman",
    results: [],
    selected: {}
  })

  useEffect(() => {
    axios(apiurl + "&s=" + state.s)
    .then(({ data }) => {
      let results = data.Search;
      console.log(results);
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

  const openPopup = id => {
    console.log(id); 
    axios(apiurl + "&i=" + id)
    .then(({data}) => {
      console.log("data", data)
      let result = data;

      console.log("result", result);

      setState(prevState => {
        return {...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    })
  }

  const popupEle = (typeof state.selected.Title != "undefined")  ? (
    <Popup selected={state.selected} closePopup={closePopup}/>
  ) : false

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
          <Search handleInput={handleInput} search={search}/>
          <Results results={state.results} openPopup={openPopup}/>
          {popupEle}
      </main>
    </div>
  );
}

export default App;

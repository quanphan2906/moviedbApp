import React from 'react'

import Search from "../components/Search"
import Results from "../components/Results"

function Home(props) {
    return (
        <div>
            <Search handleInput={props.handleInput} search={props.search} />
            <Results {...props}/>
        </div>
    )
}

export default Home

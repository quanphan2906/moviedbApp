import React from 'react'

import Result from "./Result"

function Results( { results, openPopup }) {
    const resultList = results.map(result => {
        return (
            <Result 
                key={result.imdbID} 
                result={result} 
                onClick={() => openPopup(result.imdbID)}
            />
        )
    })

    return (
        <section className="results">
            {resultList}
        </section>
    )
}

export default Results

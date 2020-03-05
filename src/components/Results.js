import React from 'react'

function Results(props) {
    const resultList = props.results.map(result => {
        return (
            <div key={result.imdbID} 
                 className="result" 
                 onClick={() => props.history.push(`/films/${result.imdbID}`)}
            >
                <img src={result.Poster} />
                <h3>{result.Title}</h3>
            </div>
        )
    })

    return (
        <section className="results">
            {resultList}
        </section>
    )
}

export default Results

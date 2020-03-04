import React from 'react'

function Result({result}) {
    console.log("From Result component", result);
    return (
        <div className="result">
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result
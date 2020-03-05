import React, {useState, useEffect} from 'react'
import axios from "axios"

function Popup(props) {
    const [film, setFilm] = useState(null)

    useEffect(() => {
        const id = props.match.params.id;
        axios(props.apiurl + "&i=" + id)
        .then(({ data }) => {
            setFilm(data)
        })
      }, []);

    return (film !== null) ? (
        <section className="popup">
            <div className="content">
                <h2>{film.Title} <span>{film.Year}</span> </h2>
                <p className="rating">Rating: {film.imdbRating}</p>
                <div className="plot">
                    <img src={film.Poster}/>
                    <p>{film.Plot}</p>
                </div>
            </div>
        </section>
    ) : (
        <div></div>
    ) 
}

export default Popup

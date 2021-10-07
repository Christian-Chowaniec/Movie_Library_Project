import React from 'react'
const img_api = "https://image.tmdb.org/t/p/w500";
const Movie = ({title, poster_path, overview, vote_average, release_date,}) =>
    <div className="movieCard">
        <div className="box-img">
            <img src={img_api + poster_path} alt={title}/>
            <div className="img-grey-bar">
            </div>
        </div>
        <div className="movie-info">
            <h3 className="movie-info-title">{title}</h3>
            <div className="single-card-info">
                <span className="single-card-info-date"> {release_date}</span>
                <span className="single-card-info-vote"> {vote_average}</span>
            </div>
        </div>
        <div className="movieCard-description">
            <h2>Description:</h2>
            <p>{overview}</p>
        </div>
    </div>

export default Movie;

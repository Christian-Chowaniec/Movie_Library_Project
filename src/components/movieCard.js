import React from 'react'
const img_api = "https://image.tmdb.org/t/p/w500";
const Movie = ({title,poster_path,overview,vote_average,release_date}) => <div
    className="movieCard">
    <img src={img_api + poster_path} alt={title}/>
    <div className="movie-info">
        <h3 className="movie-info-title">{title}</h3>
        <span className="movie-info-vote_average">{vote_average}</span>
        <span className="movie-info-date" >{release_date.slice(0, 4)}</span>

    </div>
</div>

export default Movie;

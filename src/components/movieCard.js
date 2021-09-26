import React from 'react'
const img_api = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=76578856efa3b3119d5ebe76dc5498b0";
const Movie = ({title,poster_path,overview,vote_average}) => <div
    className="movie">
    <img src={img_api + poster_path} alt={title}/>
</div>

export default Movie;

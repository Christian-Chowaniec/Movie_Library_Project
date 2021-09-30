import React from 'react'
// const info_api = "https://api.themoviedb.org/3/movie/runtime?api_key=76578856efa3b3119d5ebe76dc5498b0";
const img_api = "https://image.tmdb.org/t/p/w500";
const Movie = ({title, poster_path, overview, vote_average, release_date, backdrop_path, runtime}) =>
    <div className="movieCard">
        {/*<div className="gg-more-alt_icon">*/}
        {/*    /!*<i className="gg-chevron-down"></i>*!/*/}
        {/*    /!*<i className="gg-more-alt"></i>*!/*/}
        {/*    /!*<i className="gg-more-vertical"></i>*!/*/}
        {/*    /!*    <div className="movie-info-vote_average">{vote_average}</div>*!/*/}
        {/*</div>*/}

        <div className="box-img">
            <img src={img_api + poster_path} alt={title}/>

            <div className="img-grey-bar">
                {/*<span className="movie-info-vote_average"> {vote_average}</span>*/}
                {/*<span className="movie-info-date"> {release_date.slice(0, 4)}</span>*/}
            </div>
        </div>


        <div className="movie-info">

            {/*<span className="movie-info-title"> {info_api + runtime}</span>*/}
            <h3 className="movie-info-title">{title}</h3>
            {/*<h3 className="movie-info-title">{runtime}</h3>*/}
            {/*<div className="movie-info-bottom">*/}
            {/*    <div className="movie-info-vote_average">{vote_average}</div>*/}
            {/*    /!*<div>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
        </div>
        <div className="movieCard-description">
            <h2>Description:</h2>
            <p>{overview}</p>
        </div>
    </div>

export default Movie;

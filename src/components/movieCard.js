import React from 'react'

const img_api = "https://image.tmdb.org/t/p/w500";
const Movie = ({title,poster_path,overview,vote_average,release_date,backdrop_path,runtime}) => <div className="movieCard">
    <div className="gg-more-alt_icon">
        {/*<i className="gg-chevron-down"></i>*/}
        {/*<i className="gg-more-alt"></i>*/}
        {/*<i className="gg-more-vertical"></i>*/}
        {/*    <div className="movie-info-vote_average">{vote_average}</div>*/}
    </div>

    <img src={img_api + poster_path} alt={title}/>

    <div className="movie-info">

        <h3 className="movie-info-title">{title}</h3>
        {/*<h3 className="movie-info-title">{runtime}</h3>*/}
       {/*<div className="movie-info-bottom">*/}
       {/*    <div className="movie-info-vote_average">{vote_average}</div>*/}
       {/*    /!*<span className="movie-info-vote_average">{vote_average}</span>*!/*/}
       {/*    /!*<div>*!/*/}
       {/*    /!*    /!*<span className="movie-info-date" > {release_date.slice(0, 4)}</span>*!/*!/*/}
       {/*    /!*</div>*!/*/}
       {/*</div>*/}
    </div>
</div>

export default Movie;

// import React, {useEffect, useState} from 'react';
// import Movie from "./movieCard";
//
// const PopularList = () => {
//     const [movies, SetMovies] = useState([]);
//     const featured_api = "https://api.themoviedb.org/3/movie/popular?api_key=76578856efa3b3119d5ebe76dc5498b0&language=en-US&page=1";
//
//     useEffect(() => {
//         fetch(featured_api)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 SetMovies(data.results)
//             });
//     }, []);
//
//     return (
//         <div className="movie_container">
//             {movies.length > 0 && movies.map((movie) => <Movie key={movie.id } {...movie}/>)}</div>
//     );
// };
//
// export default PopularList;
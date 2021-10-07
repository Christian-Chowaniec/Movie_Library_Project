import React, {useEffect, useState} from 'react';
import useGenre from "../../hook/useGenre";
import axios from "axios";
import Genres from "../genres";
import SingleCard from "../singleCard/single-card";
import CustomPagination from "../pagination/CustomPagination";

const Popular = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1)
    const [numOfPages, setNumOfPages] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL = useGenre(selectedGenres)

    const fetchMovies = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=76578856efa3b3119d5ebe76dc5498b0&page=${page}&with_genres=${genreforURL}`);
        console.log(data)
        setContent(data.results);
        setNumOfPages(data.total_pages)
    }
    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [page, genreforURL])

    return (
        <>
            <div className="my-container">
                <div>
                    <h2 className="trending-title">Popular:</h2>
                    <div className="d-flex justify-content-center">
                        <Genres
                            type="movie"
                            selectedGenres={selectedGenres}
                            setSelectedGenres={setSelectedGenres}
                            genres={genres}
                            setGenres={setGenres}
                            setPage={setPage}
                        />
                    </div>

                    <div className="single-card-container">
                        {
                            content && content.map((c) => <SingleCard
                                key={c.id}
                                id={c.id}
                                poster={c.poster_path}
                                title={c.title || c.name}
                                date={c.first_air_date || c.release_date}
                                media_type="movie"
                                vote_average={c.vote_average}/>)
                        }
                    </div>

                    {numOfPages > 1 && (
                        <div className="pagination-container">
                            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Popular;
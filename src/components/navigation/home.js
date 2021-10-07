import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SingleCard from "../singleCard/single-card";
import CustomPagination from "../pagination/CustomPagination";

const Home = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1)

    const fetchTrending = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=76578856efa3b3119d5ebe76dc5498b0&page=${page}`);
        console.log(data)
        setContent(data.results);
    }
    useEffect(() => {
        fetchTrending();

    }, [page])

    return (
        <>
            <div className="my-container">
                <div>
                    <h2 className="trending-title">trending:</h2>


                    <div className="single-card-container">
                        {
                            content && content.map((c) => <SingleCard
                                key={c.id}
                                id={c.id}
                                poster={c.poster_path}
                                title={c.title || c.name}
                                date={c.first_air_date || c.release_date}
                                media_type={c.media_type}
                                vote_average={c.vote_average}
                            />)
                        }
                        {/*<button onClick={addToMyList}>add</button>*/}
                    </div>
                    {/*<h2 className="trending-title">Popular:</h2>*/}
                    {/*<div className="single-card-container" >*/}
                    {/*    <Popular/>*/}
                    {/*</div>*/}
                    <div className="pagination-container">
                        <CustomPagination setPage={setPage}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
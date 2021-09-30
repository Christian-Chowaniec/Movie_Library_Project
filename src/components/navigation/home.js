import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import Movie from "../movieCard";
import SingleContent from "../singleContent/single-content";

// const tvserials_api = `https://api.themoviedb.org/3/tv/{tv_id}/season/{season_number}?api_key=76578856efa3b3119d5ebe76dc5498b0&language=en-US`;
const trending_api = `https://api.themoviedb.org/3/trending/all/day?api_key=76578856efa3b3119d5ebe76dc5498b0`

const Home = () => {
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const {data} = await axios.get(trending_api);
        console.log(data)
        setContent(data.results);
    }
    useEffect(() => {
        fetchTrending();

    }, [])

    return (
        <>
            <div>
                <h2>Home</h2>
                <h2>1</h2>
                <h2>2</h2>
                <h2>3</h2>
            </div>

            <div>
                <h2>trending:</h2>
                <div className="trending">
                    {
                        content && content.map((c) => <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}/>)
                    }

                </div>

            </div>
        </>


    );
};

export default Home;
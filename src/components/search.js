import React, {useEffect, useState} from 'react';
import axios from "axios";
// import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import useGenre from "../hook/useGenre";
// import Genres from "./genres";
import SingleCard from "./singleContent/single-card";
import CustomPagination from "./pagination/CustomPagination";
import {
    Button,
    // createMuiTheme,
    Tab,
    Tabs,
    TextField,
    // ThemeProvider,
} from "@material-ui/core";

const Search = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1)
    const [numOfPages, setNumOfPages] = useState()
    // const [selectedGenres, setSelectedGenres] = useState([])
    const [searchText, setSearchText] = useState("")
    const [type, setType] = useState(0);
    // const genreforURL = useGenre(selectedGenres)



    // const [earch, search] = useState([]);
    const fetchSearch = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=76578856efa3b3119d5ebe76dc5498b0&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
        console.log(data)
        setContent(data.results);
        setNumOfPages(data.total_pages);
        // console.log(data);
    }


    useEffect(() => {
        fetchSearch();
    }, [type,page]);


    return (
        <>
            <div>
                <h1>here can you search movies!</h1>
                {/*<input type="text"/>*/}
                <TextField
                    style={{ flex: 1 }}
                    className="searchBox"
                    label="Search"
                    variant="filled"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button
                    onClick={fetchSearch}
                    variant="contained"
                    style={{ marginLeft: 10 }}
                >
                    <SearchIcon fontSize="large" />
                </Button>

                {/*<button> <SearchIcon/>*/}
                {/*</button>*/}


                <div className="my-container">
                    <div>
                        <Tabs
                            value={type}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={(event, newValue) => {
                                setType(newValue);
                                setPage(1);
                            }}
                            style={{ paddingBottom: 5 }}
                            aria-label="disabled tabs example"
                        >
                            <Tab style={{ width: "50%" }} label="Search Movies" />
                            <Tab style={{ width: "50%" }} label="Search TV Series" />
                        </Tabs>
                        {/*<h2 className="trending-title">Movies:</h2>*/}

                        <div className="single-card-container">
                            {
                                content && content.map((c) => <SingleCard
                                    key={c.id}
                                    id={c.id}
                                    poster={c.poster_path}
                                    title={c.title || c.name}
                                    date={c.first_air_date || c.release_date}
                                    media_type={type ? "tv" : "movie"}
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
            </div>
        </>
    );
};

export default Search;
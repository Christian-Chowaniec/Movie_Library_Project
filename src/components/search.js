import React, {useEffect, useState} from 'react';
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import SingleCard from "./singleCard/single-card";
import CustomPagination from "./pagination/CustomPagination";
import {
    Button,
    Tab,
    Tabs,
    TextField,
    createTheme as createMuiTheme,
    ThemeProvider,
} from "@material-ui/core";

const Search = () => {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1)
    const [numOfPages, setNumOfPages] = useState()
    // const [selectedGenres, setSelectedGenres] = useState([])
    const [searchText, setSearchText] = useState("")
    const [type, setType] = useState(0);
    // const genreforURL = useGenre(selectedGenres)

    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff",
            },
        },
    });

    const fetchSearch = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=76578856efa3b3119d5ebe76dc5498b0&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
        console.log(data)
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchSearch();
    }, [type, page]);

    return (
        <>
            <div>
                <div className="my-container">
                    <ThemeProvider theme={darkTheme}>
                        <div style={{display: 'flex', margin: "1em 0",}}>
                            <TextField
                                style={{flex: 1}}
                                className="searchBox"
                                label="Search"
                                variant="filled"
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            <Button
                                onClick={fetchSearch}
                                variant="contained"
                                style={{marginLeft: 0, borderRadius: "0 5px 5px 0"}}
                            >
                                <SearchIcon fontSize="large"/>
                            </Button>

                        </div>
                    </ThemeProvider>

                    <div>
                        <ThemeProvider theme={darkTheme}>
                            <Tabs
                                value={type}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={(event, newValue) => {
                                    setType(newValue);
                                    setPage(1);
                                }}
                                style={{paddingBottom: 5,}}
                                aria-label="disabled tabs example"
                            >
                                <Tab style={{width: "50%"}} label="Movies"/>
                                <Tab style={{width: "50%"}} label="TV Series"/>
                            </Tabs>

                        </ThemeProvider>
                        <div className="single-card-container">


                            {
                                content && content.map((c) => (
                                    <SingleCard
                                        key={c.id}
                                        id={c.id}
                                        poster={c.poster_path}
                                        title={c.title || c.name}
                                        date={c.first_air_date || c.release_date}
                                        media_type={type ? "tv" : "movie"}
                                        vote_average={c.vote_average}
                                    />
                                ))}

                            {searchText &&
                            !content &&
                            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}

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
    )
        ;
};

export default Search;
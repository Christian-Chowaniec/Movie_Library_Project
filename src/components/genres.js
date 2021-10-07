import React, {useEffect} from 'react';
import axios from "axios";
import {Chip} from "@material-ui/core";
import {createTheme as createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

const Genres = ({type, selectedGenres, setSelectedGenres, genres, setGenres, setPage}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };
    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    };
    const fetchGenres = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=76578856efa3b3119d5ebe76dc5498b0&language=en-US`
        );
        setGenres(data.genres);
    };
    const darkRedTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "rgba(255, 0, 0, 0.55)",
            },
        },
    });

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        };
        // eslint-disable-next-line
    }, []);

    return (
        <ThemeProvider theme={darkRedTheme}>
            <div style={{padding: "6px 14px"}}>
                {selectedGenres.map((genre) => (
                    <Chip
                        style={{margin: 2}}
                        label={genre.name}
                        key={genre.id}
                        color="primary"
                        clickable
                        size="small"
                        onDelete={() => handleRemove(genre)}
                    />
                ))}
                {genres.map((genre) => (
                    <Chip
                        style={{margin: 2, padding: 2}}
                        label={genre.name}
                        key={genre.id}
                        clickable
                        size="small"
                        onClick={() => handleAdd(genre)}
                    />
                ))}
            </div>
        </ThemeProvider>
    );
};

export default Genres;
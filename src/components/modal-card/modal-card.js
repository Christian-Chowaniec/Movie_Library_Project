import React, {useEffect, useState} from "react";
import {createTheme as createMuiTheme, makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Button} from "@material-ui/core";
import {ThemeProvider} from "@emotion/react";

const image_api = "https://image.tmdb.org/t/p/w500";
const image_unavailable = "https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png";
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: "85%",
        height: "80%",
        // backgroundColor: "#39445a",
        backgroundColor: "#141414",
        // border: "1px solid #282c34",
        border: "2px solid #242424",
        borderRadius: 10,
        color: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 3),
        // boxShadow:

    },
}));


export default function TransitionsModal({children, media_type, id,}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const fetchData = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=76578856efa3b3119d5ebe76dc5498b0&language=en-US`
        );
        setContent(data);
    };
    const fetchVideo = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=76578856efa3b3119d5ebe76dc5498b0&language=en-US`
        );
        setVideo(data.results[0]?.key);
    };
    useEffect(() => {
        fetchData();
        fetchVideo();
        // eslint-disable-next-line
    }, []);
    const darkRedTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "rgba(255, 0, 0, 0.55)",
            },
        },
    });

    return (
        <>
            <div
                className="single-card-box "
                style={{cursor: "pointer"}}

                // color="inherit"
                onClick={handleOpen}
            >
                {children}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}

                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}

                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>

                    {content && (
                        <div className={classes.paper}>

                            <button className="modal-box-close-btn" onClick={handleClose}>
                                <i className="gg-close"></i>
                                {/*<i className="fas fa-times"></i>*/}
                            </button>


                            <div className="modal-box-top-img">
                                <img src={content.poster_path ? `${image_api}/${content.poster_path}` : image_unavailable} alt={content.name || content.title}/>
                            </div>

                            <div className="modal-box">

                                <div className="modal-box-top">



                                    <div className="modal-box-top-title">

                                        <div className="modal-box-top-title-1">
                                            <span>{content.name || content.title}({(content.first_air_date || content.release_date || "-----").substring(0, 4)})</span>
                                        </div>
                                        <div className="modal-box-bottom-more_info">
                                            <span>{content.release_date}</span>
                                            <div className="space-line"></div>
                                            <span>{content.vote_average}</span>
                                            <div className="space-line"></div>
                                            <span>{content.runtime ? content.runtime + "min" : ""} </span>
                                        </div>
                                    </div>

                                </div>

                                <div className="modal-box-bottom">
                                    <div className="modal-box-bottom-description">
                                        <div>
                                            <span>Description</span>
                                            <p className="modal-box-bottom-description-text">{content.overview}</p>
                                        </div>

                                        <div>
                                            <ThemeProvider theme={darkRedTheme}>
                                                <Button
                                                    variant="outlined"
                                                    startIcon={<YouTubeIcon/>}
                                                    className="watch-the-trailer-btn"
                                                    color="secondary"
                                                    target="__blank"
                                                    href={`https://www.youtube.com/watch?v=${video}`}
                                                >Watch the Trailer
                                                </Button>
                                            </ThemeProvider>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Fade>
            </Modal>
        </>
    );
}
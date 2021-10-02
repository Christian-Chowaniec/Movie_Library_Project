import React from 'react';

const image_api = "https://image.tmdb.org/t/p/w500";
const image_unavailable = "https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png";


const SingleCard = ({ id, poster, title, date, media_type, vote_average, overview}) => {
    const addToMyList = () => {
        fetch('http://localhost:3000/favorites', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                poster,
                title,
                date,
                media_type,
                vote_average,
                overview
            })
        })
    }
    return (
        <>
            <div className="single-card-box">
                <img className="" src={poster ? `${image_api}${poster}` : image_unavailable} alt={title}/>

                <h3 className="single-card-title">{title}</h3>

                <div className="single-card-info">
                    <h2 className="single-card-info-type">{media_type === "tv" ? "TV Series" : "Movie"}</h2>
                    <span className="single-card-info-date"> {date}</span>
                    <span className="single-card-info-vote"> {vote_average}</span>
                    {/*<span className="single-card-info-vote"> {overview}</span>*/}
                </div>
                <button onClick={addToMyList}>add</button>
            </div>
        </>
    );
};

export default SingleCard;

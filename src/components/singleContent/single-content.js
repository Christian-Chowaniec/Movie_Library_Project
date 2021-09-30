import React from 'react';

const image_api = "https://image.tmdb.org/t/p/w500";
const image_unavailable = "https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png";


const SingleContent = ({key, id, poster, title, date, media_type, vote_average, overview}) => {
    return (
        <>
            {/*<div>*/}
            {/*    <h1>{title}</h1>*/}
            {/*    <img src={poster ? `${image_api}${poster}` : image_unavailable} alt={title}/>*/}
            {/*</div>*/}

            <div className="movieCard">

                <div className="box-img">
                    {/*<h1>{title}</h1>*/}
                    <img src={poster ? `${image_api}${poster}` : image_unavailable} alt={title}/>

                    <div className="img-grey-bar">
                    </div>
                </div>

                <div className="movie-info">
                    <h3 className="movie-info-title">{title}</h3>
                </div>

                <div className="movieCard-description">
                    <h2>Description:</h2>
                    <p>{overview}</p>
                </div>

            </div>
        </>
    );
};

export default SingleContent;
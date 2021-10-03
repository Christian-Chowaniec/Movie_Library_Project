import React from 'react';

const image_api = "https://image.tmdb.org/t/p/w500";
const image_unavailable = "https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png";


const SingleCard = ({ id, poster, title, date, media_type, vote_average, overview, onMyList, setUsers}) => {
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
    const deleteFromMyList = () => {
        fetch(`http://localhost:3000/favorites/${id}`, {
            method: "DELETE",

        }).then(r => r.json()).then(d => {
            setUsers(prev => prev.filter(el => el.id !== id))
        })
    }

    return (
        <>
            <div className="single-card-box">
                <img className="" src={poster ? `${image_api}${poster}` : image_unavailable} alt={title}/>
                <div className="buttons-add-delete">
                    {/*{!onMyList && <button onClick={addToMyList}>add</button>}*/}

                    {!onMyList && <i onClick={addToMyList} className="gg-add"></i>}

                    {/*<i className="fas fa-plus-circle"></i>*/}


                    {onMyList && <i onClick={deleteFromMyList} className="gg-close-o"></i>}
                    {/*{onMyList && <button onClick={deleteFromMyList}>remove</button>}*/}
                </div>

                {/*<img className="" src={poster ? `${image_api}${poster}` : image_unavailable} alt={title}/>*/}

                <div className="single-card-title-bottom">
                    <h3 className="single-card-title">{title}</h3>

                    <div className="single-card-info">
                        <h2 className="single-card-info-type">{media_type === "tv" ? "TV Series" : "Movie"}</h2>
                        <span className="single-card-info-date"> {date}</span>
                        <span className="single-card-info-vote"> {vote_average}</span>
                        {/*<span className="single-card-info-vote"> {overview}</span>*/}
                    </div>
                </div>

            </div>
        </>
    );
};

export default SingleCard;

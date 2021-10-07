import React, {useEffect, useState} from 'react';
import SingleCard from "../singleCard/single-card";


const MyList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/favorites')
            .then(r => r.json())
            .then(d => setUsers(d));
    }, [])

    console.log(users)
    return (
        <>

            {/*<h2 className="trending-title">My List:</h2>*/}

            <div className="my-container">
                <h2 className="trending-title">My List:</h2>
                {/*<Link to="/my-list/add">*/}
                {/*    /!*<button> ADD MOVIE</button>*!/*/}
                {/*    <Button variant="contained">ADD MOVIE</Button>*/}
                {/*</Link>*/}


            <div className="single-card-container">
                {
                    users.length && users.map((c) => <SingleCard
                        key={c.id}
                        id={c.id}
                        poster={c.poster}
                        title={c.title || c.name}
                        date={c.date}
                        media_type="movie"
                        vote_average={c.vote_average}
                        setUsers={setUsers}
                        onMyList={true}/>

                    )

                }

            </div>
            </div>

        </>
    )
};

export default MyList;
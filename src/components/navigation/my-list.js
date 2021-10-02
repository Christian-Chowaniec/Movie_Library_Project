
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import SingleCard from "../singleContent/single-card";


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

            <h2 className="trending-title">My List:</h2>

            <div className="my-container">
                <Link to="/my-list/add">
                    {/*<button> ADD MOVIE</button>*/}
                    <Button variant="contained">ADD MOVIE</Button>
                </Link>
            </div>


            {/*<tbody>*/}
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        <td>id</td>*/}
            {/*        <td>title</td>*/}
            {/*        <td>description</td>*/}
            {/*        <td>date</td>*/}
            {/*        <td>image</td>*/}
            {/*        <td>type</td>*/}
            {/*    </tr>*/}
            {/*    {*/}
            {/*        users.map((item)=>*/}
            {/*            <tr>*/}
            {/*                <td>{item.id}</td>*/}
            {/*                <td>{item.title}</td>*/}
            {/*                <td>{item.description}</td>*/}
            {/*                <td>{item.date}</td>*/}
            {/*                <td>{item.image}</td>*/}
            {/*                <td>{item.type}</td>*/}
            {/*            </tr>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</table>*/}
            {/*</tbody>*/}
            <div className="single-card-container">
                {
                    users.length && users.map((c) => <SingleCard
                        key={c.id}
                        id={c.id}
                        poster={c.poster}
                        title={c.title || c.name}
                        date={c.date}
                        media_type="movie"
                        vote_average={c.vote_average}/>)
                }
            </div>
        </>
    )
};

export default MyList;
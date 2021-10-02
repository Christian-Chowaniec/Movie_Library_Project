import AddObject from "../add-object/add-object"
import {Switch, Route, Link} from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";

const MyList = () => {


    return (
        <>

            <h2 className="trending-title">My List:</h2>

            <div className="my-container">
                <Link to="/my-list/add">
                    {/*<button> ADD MOVIE</button>*/}
                    <Button variant="contained">ADD MOVIE</Button>
                </Link>
            </div>


            <Switch>
                <Route path="/my-list/add" component={AddObject}/>
            </Switch>

        </>
    )
};

export default MyList;
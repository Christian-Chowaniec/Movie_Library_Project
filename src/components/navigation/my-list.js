import AddObject from "../add-object/add-object"
import {Switch, Route, Link} from "react-router-dom";

const MyList = () => {


    return (
        <>

            <h2 className="trending-title">My List:</h2>

            <div className="my-container">
                <Link to="/my-list/add">
                    <button> ADD MOVIE</button>
                </Link>
            </div>


            <Switch>
                <Route path="/my-list/add" component={AddObject}/>
            </Switch>

        </>
    )
};

export default MyList;
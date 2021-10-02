import React from 'react';
// import {Route, Switch} from "react-router-dom";

const AddObject = () => {
    return (
        <>
            <div className="my-container">
                <input type="text" placeholder="title"/>
                <br/>
                <input type="text" placeholder="description"/>
                <br/>
                <input type="number" placeholder="date"/>
                <br/>
                <input type="text" placeholder="image"/>
                <br/>
                <form>
                    <h1>Type:</h1>
                    <select>
                        <option value="ms">Movie</option>
                        <option value="mrs">TV Series</option>
                        <option value="mr">TV</option>
                    </select>
                </form>
                <br/>
                <button>SAVE</button>
            </div>
        </>
    );
};

export default AddObject;
// import React from 'react';
// import {TextField} from "@material-ui/core";
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// // import {Route, Switch} from "react-router-dom";
// const currencies = [
//     {
//         value: 'movie',
//         label: 'Movie',
//     },
//     {
//         value: 'tv',
//         label: 'TV Series',
//     }
// ];
//
// const AddObject = () => {
//
//
//     const [currency, setCurrency] = React.useState('EUR');
//
//
//     const handleChange = (event) => {
//         setCurrency(event.target.value);
//     };
//
//     return (
//         <>
//             <div className="my-container">
//                 {/*<input type="text" placeholder="title"/>*/}
//                 <TextField
//                     style={{ flex: 1 }}
//                     className="searchBox"
//                     label="Title"
//                     variant="filled"
//                     // onChange={(e) => setSearchText(e.target.value)}
//                 />
//                 <br/>
//                 {/*<input type="text" placeholder="description"/>*/}
//                 <TextField
//                     style={{ flex: 1 }}
//                     // id="filled-multiline-static"
//                     label="Descritpion"
//                     multiline
//                     rows={4}
//                     variant="filled"
//                 />
//                 <br/>
//                 {/*<input type="number" placeholder="date"/>*/}
//                 <TextField
//                     style={{ flex: 1 }}
//                     className="searchBox"
//                     label="Date"
//                     variant="filled"
//                     type="number"
//                     // onChange={(e) => setSearchText(e.target.value)}
//                 />
//                 <br/>
//                 {/*<input type="text" placeholder="image"/>*/}
//                 <TextField
//                     style={{ flex: 1 }}
//                     className="searchBox"
//                     label="Image"
//                     variant="filled"
//                     // onChange={(e) => setSearchText(e.target.value)}
//                 />
//                 <br/>
//                 <TextField
//                     id="filled-select-currency"
//                     select
//                     label="Type"
//                     value={currency}
//                     onChange={handleChange}
//                     helperText="Please select your type"
//                     variant="filled"
//                 >
//                     {currencies.map((option) => (
//                         <MenuItem key={option.value} value={option.value}>
//                             {option.label}
//                         </MenuItem>
//                     ))}
//                 </TextField>
//
//                 {/*<form>*/}
//                 {/*    <h1>Type:</h1>*/}
//                 {/*    <select>*/}
//                 {/*        <option value="ms">Movie</option>*/}
//                 {/*        <option value="mrs">TV Series</option>*/}
//                 {/*        <option value="mr">TV</option>*/}
//                 {/*    </select>*/}
//                 {/*</form>*/}
//                 <br/>
//                 {/*<button>SAVE</button>*/}
//                 <Button variant="contained">SAVE</Button>
//             </div>
//         </>
//     );
// };
//
// export default AddObject;
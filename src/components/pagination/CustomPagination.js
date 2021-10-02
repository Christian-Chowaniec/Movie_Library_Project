import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createTheme as createMuiTheme, ThemeProvider} from "@material-ui/core";
// import { createTheme } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
});

export default function CustomPagination({setPage, numOfPages = 10}) {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
            }}
        >

            <ThemeProvider theme={darkTheme}>
                <Pagination
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    count={numOfPages}
                    color="primary"
                    hideNextButton
                    hidePrevButton
                />
            </ThemeProvider>
        </div>
    );
}
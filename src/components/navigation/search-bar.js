import React from 'react';

const SearchBar = () => {
    return (
        <>
            <div className="search-box">
                <button className="btn-search">
                    <div className="gg-search_icon">
                        <i className="gg-search"></i>
                    </div>
                </button>
                <input type="text"
                       className="input-search"
                       placeholder="Type to Search..."
                />
            </div>
        </>
    );
};

export default SearchBar;

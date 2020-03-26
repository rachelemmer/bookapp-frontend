import React from 'react';

const Search = (props) => {
    return (
        <form onSubmit={props.handleSearch}>
            <input className="search-box" name="searchInput" onChange={props.handleChange} type="text" placeholder="Search Books Here"/>
            {/* <button className="search-btn" type="submit">Search Books</button> */}
        </form>
    )
}

export default Search;
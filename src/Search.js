import React from 'react';

const Search = (props) => {
    return (
        <form onSubmit={props.handleSearch}>
            <input className="search-box" name="searchInput" onChange={props.handleChange} type="text" placeholder="Search Books Here"/>
        </form>
    )
}

export default Search;
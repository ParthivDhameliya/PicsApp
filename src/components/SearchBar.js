import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('')

    const handleClick = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    return ( 
        <div className='search-bar'>
            <form onSubmit={handleClick}>
                <label className='label-text'>Enter search term: </label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}
 
export default SearchBar;
import { useState } from "react";
import { useDispatch } from "react-redux";

function Search() {

    const dispatch = useDispatch();

    const [searchIn, setSearchIn] = useState('');

    const handleSearchChange = (event) => {
        setSearchIn(event.target.value)
    }

    const submitSearch = () => {
        dispatch({
            type: 'SUBMIT_SEARCH',
            payload: searchIn
        })
    }

    return(
        <>
            <h1>Giphy Search!</h1>
            <input onChange={handleSearchChange} placeholder="Search" type="text" value={searchIn} />
            <button onClick={submitSearch}>Submit</button>
        </>
    )
}

export default Search;
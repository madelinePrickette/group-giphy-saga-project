import { useState } from "react";
import { useDispatch } from "react-redux";

function Search() {

    const dispatch = useDispatch(); // allows for dispatch to be used to send data to index.js

    const [searchIn, setSearchIn] = useState(''); // constantly changing local state monitoring the values
    // that the user is typing in the input.

    const handleSearchChange = (event) => {
        setSearchIn(event.target.value)
        // here is where the value of searchIn changes as the user types
    }

    const submitSearch = () => {
        dispatch({
            type: 'SUBMIT_SEARCH',
            payload: searchIn
        })
        // this runs when the button is clicked and it takes in the value of searchIn and sends it to the index.
    }

    return(
        <>
            <h1>Giphy Search!</h1>
            <input onChange={handleSearchChange} placeholder="Search" type="text" value={searchIn} />
            {/* as the user is typing in their search, onChange of that, it goes to handleSearchChange */}
            <button onClick={submitSearch}>Submit</button>
            {/* onClick of this button, submitSearch is triggered */}
        </>
    )
}

export default Search;
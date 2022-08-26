import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/*
This component is for adding a dropdown menu under each GIPH.
The user will select which category they want to file the GIPH under.
Whichever category that is selected will send a dispatch to the server.
*/



function Dropdown({id}) {

//USESTATE
const [category, setCategory] = useState(0);
const dispatch = useDispatch();

//HANDLE CLICK 
const handleClick = () => {
    event.preventDefault();

    dispatch({
        type: 'CHANGE_CATEGORY',
        payload: {favCategory: Number(category), favId: id}
    })

    console.log('Category changed to:', category);
} // end handleClick

function handleChange(event) {
    setCategory(event.target.value);
    console.log(category);
}


// RETURN
/*
The value numbers correspond to the id of the category on the server. 
*/
return(
<>
    {/* DROPDOWN HTML */}
    <label for="category">Categories:</label>

    <select 
    onChange={handleChange}
    name="category" 
    id="category">
        <option>choose category</option>
        <option value="1">Funny</option>
        <option value="2">Cohort</option>
        <option value="3">Cartoon</option>
        <option value="4">NSFW</option>
        <option value="5">Meme</option>
    </select> 

    {/* SUBMIT BUTTON */}
    <button 
        onClick={handleClick}>
        Submit Category
    </button>
</>
); // end RETURN
} // end Dropdown

export default Dropdown;
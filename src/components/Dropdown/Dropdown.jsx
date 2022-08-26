import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/*
This component is for adding a dropdown menu under each GIPH.
The user will select which category they want to file the GIPH under.
Whichever category that is selected will send a dispatch to the server.
*/


//DROPDOWN FUNCTION
function Dropdown({id}) {

//USESTATE
const [category, setCategory] = useState(0);
const dispatch = useDispatch();

//HANDLECLICK 
/*
When the "Submit Category" button is clicked, this function is triggered.
We send a dispatch. The payload of the dispatch takes the category value from the dropdown and converts it from a string to a number.
*/
const handleClick = () => {
    event.preventDefault();

    dispatch({
        type: 'CHANGE_CATEGORY',
        payload: {favCategory: Number(category), favId: id}
    })

    console.log('Category changed to:', category);
} // end handleClick

//HANDLECHANGE
/*
Triggered when the user selects a category in the dropdown.
handleChange retrieves the chosen value from selecting a category in the dropdown menu.  
Selecting the category is *the event*. And event.target.value *retrieves* that value from the event.
*/
function handleChange(event) {
    setCategory(event.target.value);
    console.log(category);
}


// RETURN
/*
The value numbers correspond to the id of the category on the server. 
<Select> has an onChange which triggers {handleChange}.
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
} // end DROPDOWN

export default Dropdown;
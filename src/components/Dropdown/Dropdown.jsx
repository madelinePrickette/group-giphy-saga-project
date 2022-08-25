import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/*
This component is for adding a dropdown menu under each GIPH.
The user will select which category they want to file the GIPH under.
Whichever category that is selected will send a dispatch to the server.
*/



 function Dropdown() {

//USESTATE
const [category, setCategory] = useState("1");


//HANDLE CLICK 
const handleClick = (event) => {
    event.preventDefault();

    dispatchEvent({
        type: 'CHANGE_CATEGORY',
        payload: category
    })

    console.log('Category changed to:', category);
} // end handleClick



// RETURN
/*
The value numbers correspond to the id of the category on the server. 
*/
return(
<>
    {/* DROPDOWN HTML */}
    <label for="category">Categories:</label>

    <select name="category" id="category">
        <option onClick={(event) => setCategory(1)} value="1">Funny</option>
        <option onClick={(event) => setCategory(2)} value="2">Cohort</option>
        <option onClick={(event) => setCategory(3)} value="3">Cartoon</option>
        <option onClick={(event) => setCategory(4)} value="4">NSFW</option>
        <option onClick={(event) => setCategory(5)} value="5">Meme</option>
    </select> 

    {/* SUBMIT BUTTON */}
    <button 
        onClick={handleClick}>
        Submit Category
    </button>
</>
); // end RETURN
} // end categoryDropdown

export default Dropdown;
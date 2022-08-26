
import {useDispatch} from 'react-redux';

function ResultsItem ({pic}) {
    //create an instance of dispatch
    let dispatch = useDispatch();

    //favoriteGif function declared here. This function will run when the heart button is clicked.
    //'FAVORITE_GIF' action is dispatched; the image url is sent via payload. 
    const favoriteGif = () => {
        console.log('clicked favorite')
        dispatch({
            type: 'FAVORITE_GIF', payload: pic.images.original.url
        })
    }

    return(
        
        <>
        {/* //we drill into the pic prop object (passed from resultsList) and display the img
        //through the image tag.  */}
            <li><img src={pic.images.original.url}></img></li>
        {/* when the heart button is clicked, action 'FAVORITE_GIF' action is dispatched. */}
            <button onClick={favoriteGif}>❤️Favorite</button>
        </>
        

    )

}//end of Favorite Item

export default ResultsItem;
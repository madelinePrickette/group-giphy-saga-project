
import {useDispatch} from 'react-redux';

function ResultsItem ({pic}) {

    let dispatch = useDispatch();

    const favoriteGif = () => {
        console.log('clicked favorite')
        dispatch({
            type: 'FAVORITE_GIF', payload: pic.images.original.url
        })
    }

    return(

        <>
            <li><img src={pic.images.original.url}></img></li>
            <button onClick={favoriteGif}>❤️Favorite</button>
        </>
        

    )

}//end of Favorite Item

export default ResultsItem;
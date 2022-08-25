import {useDispatch} from 'react-redux';

function ResultsItem ({pic}) {

    let dispatch = useDispatch();

    const favoriteGif = () => {
        console.log('clicked favorite', pic.id)
        dispatch({
            type: 'FAVORITE_GIF', payload: pic.url
        })
    }

    return(
        <>
            <li><img src={pic.url}></img></li>
            <button onClick={favoriteGif}>❤️Favorite</button>
        </>
        
    )

}//end of Favorite Item

export default ResultsItem;
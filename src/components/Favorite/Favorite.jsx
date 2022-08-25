import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import Dropdown from '../Dropdown/Dropdown.jsx'

function Favorite() {

    useEffect(() => {
        getFavorites();
    }, []);

    const dispatch = useDispatch();

    const getFavorites = () => {
        dispatch({
            type: 'GET_FAVORITES',
        })
    }

    const favorites = useSelector(store => store.favorites);

    return(

        <>
            <h1>Favorites!</h1>

            {favorites.map(favorite => {
                return(
                    <div key={favorite.id}>
                        <img src="favorite.url" />
                        {/* <Dropdown /> */}
                    </div>
                )
            })}
        </>
    )
}

export default Favorite;
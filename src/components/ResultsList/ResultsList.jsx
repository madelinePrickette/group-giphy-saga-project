import ResultsItem from '../ResultsItem/ResultsItem.jsx';
import {useSelector} from 'react-redux';
function ResultsList () {

    //we connect to the store via useSelector hook and
    //we set a searchResult variable to the searchResult reducer
    //searchResult is an array of objects from the search results from API.
    const searchResult = useSelector(store => store.searchResult);
    console.log('searchResult', searchResult);


    return(
        //We map over searchResult and return the ResultsItem component
        //we pass the entire pic object on to ResultsItem component via PROPS
        <ul>
        {searchResult.map((pic) =>{
            return (
                <ResultsItem key={pic.id} pic={pic} />
            )

        })}
        </ul>
        

    );

}//end of favorite List

export default ResultsList;
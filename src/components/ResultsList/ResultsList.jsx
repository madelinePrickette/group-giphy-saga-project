import ResultsItem from '../ResultsItem/ResultsItem.jsx';
import {useSelector} from 'react-redux';
function ResultsList () {

    const searchResult = useSelector(store => store.searchResult);
    console.log('searchResult', searchResult);

    return(
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
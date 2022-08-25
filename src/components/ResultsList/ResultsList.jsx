import ResultsItem from '../ResultsItem/ResultsItem.jsx';
import {useSelector} from 'react-redux';
function ResultsList () {

    const response = useSelector(store => store.response);
    console.log(response);

    return(
        <>
        <h3>Result mapping goes here</h3>
        <ResultsItem />
        </>
    );

}//end of favorite List

export default ResultsList;
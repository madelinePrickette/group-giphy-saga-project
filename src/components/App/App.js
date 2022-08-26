import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import ResultsList from '../ResultsList/ResultsList.jsx';
//IMPORT COMPONENTS]
import Favorite from '../Favorite/Favorite';
import Search from '../Search/Search.jsx'
import Dropdown from '../Dropdown/Dropdown'


function App(props) {
 




  // ROUTERS
return ( 
  <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Giphy Saga Group Project</h1>
      </header>
      <p>Find and favorite gifs!</p>

    <nav>
      <ul>
        <li>
          <Link to='/'>Search</Link>
        </li>
        <li>
          <Link to='/favorite'>Favorites</Link>
        </li>
      </ul>
    </nav>
    
      {/* SEARCH */}
      <Route path="/" exact>
        <Search />
        <ResultsList />
      </Route>

      {/* FAVORITE */}
      <Route path="/favorite">
        <Favorite />
      </Route>

    </div>
  </Router>
); // end ROUTERS

}// end APP



export default App;

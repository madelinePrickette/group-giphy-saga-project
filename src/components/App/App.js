import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'

//IMPORT COMPONENTS
import Favorites from '../Favorites/Favorites';

import Search from '../Search/Search.jsx'


function App(props) {
 




  // ROUTERS
return ( 
  <Router>
    <div>
      <h1>Giphy Search!</h1>
      <Search />
    </div>

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Giphy Saga Group Project</h1>
      </header>

      <p>Find and favorite gifs!</p>
      
      {/* SEARCH */}
      <Route path="/search">
        <Search />
      </Route>

      {/* FAVORITE */}
      <Route path="/favorite">
        <Favorites />
      </Route>

    </div>
  </Router>
); // end ROUTERS

}// end APP



export default App;

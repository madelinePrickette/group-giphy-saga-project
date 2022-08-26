import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

//below are all of the listeners for dispatches sent from the client side.
function* rootSaga() {
    yield takeEvery('SUBMIT_SEARCH', getResults)
    yield takeEvery('FAVORITE_GIF', favoriteGif)
    yield takeEvery('GET_FAVORITES', getFavorites);
    yield takeEvery('CHANGE_CATEGORY', getCategory);
} 

// this gets the response from the seach and calls the set response function with this response.data as an argument.
function* getResults(action){
    try {
        let response = yield axios.get(`/api/search/${action.payload}`)
        yield put({ type: 'SET_RESPONSE', payload: response.data})
    } catch (err) {
        console.log(err);
    }
}

// this function adds a gif to the favorites by posting the gif to the database. we also call get favorites to update the favorites
function* favoriteGif(action) {
    console.log(action.payload);
    try{
        yield axios.post('/api/favorite', {url: action.payload}) //action.payload will be.. the gif url?
        yield put({type: 'GET_FAVORITES'})
    } catch(err) {
        console.error('ERROR in POST generator', err)
    }
}

// this function sets the category passed through when the user selects a category and submits.
// we pass in the id of the gif and the category id we are adding. we then call get favorites to update favorites.
// we have to send through the action.payload.favCategory as an object because it is drilled into on the server side route.
function* getCategory(action) {
    console.log(action.payload);
    try{
        yield axios.put(`/api/favorite/${action.payload.favId}`, {category: action.payload.favCategory});
        yield put ({type:'GET_FAVORITES' })
    } catch(err) {
        console.error('error in put', error);
    }

}//end of category function

// this holds the info of the search results that we pass through as a reducer to map through and render in the search page.
const searchResult = ( state = [], action ) => {
    switch (action.type) {
        case 'SET_RESPONSE':
            return action.payload.data;
        default:
            return state;
    }
}

// this function sends a get request to get all the favorites and calls set favorites, using the response.data as the argument.
function* getFavorites(action){
    try{
        let response = yield axios.get('/api/favorite')
        yield put({type: 'SET_FAVORITES', payload: response.data})
    } catch (err) {
        console.log(err);
    }
}

// this is where we hold the favorites info that we pass through as a reducer to map through and render in the favorites page.
const favorites = ( state = [], action ) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        default:
            return state;
    }
}

// DROPDOWN CATEGORY REDUCER
const dropdownCategory = ( state='', action ) => {
    if( action.type === 'CHANGE_CATEGORY' ) {
        console.log(action.payload);
        return action.payload;
    }
    return state;
}

// we pass through the below to be used in the useSelectors on the client side.
const store = createStore(
    combineReducers({
        searchResult,
        favorites,
        favoriteGif,
        dropdownCategory
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

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

function* rootSaga() {

    yield takeEvery('SUBMIT_SEARCH', getResults)
    yield takeEvery('FAVORITE_GIF', favoriteGif)
    yield takeEvery('GET_FAVORITES', getFavorites);
} 

// function* submitSearch(action){
//     // console.log('searching');

// }

function* getResults(action){
    try {
        let response = yield axios.get(`/api/search/${action.payload}`)
        yield put({ type: 'SET_RESPONSE', payload: response.data})
    } catch (err) {
        console.log(err);
    }
}


function* favoriteGif(action) {
    try{
        yield axios.post('/api/favorite', action.payload) //action.payload will be.. the gif url?
        yield put({type: 'GET_FAVORITES'})
    } catch(err) {
        console.error('ERROR in POST generator', err)
    }
}

const searchResult = ( state = [], action ) => {
    switch (action.type) {
        case 'SET_RESPONSE':
            return action.payload.data;
        default:
            return state;
    }
}

function* getFavorites(action){
    try{
        let response = yield axios.get('/api/favorite')
        yield put({type: 'SET_FAVORITES', payload: response.data})
    } catch (err) {
        console.log(err);
    }
}

const favorites = ( state = [], action ) => {
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        default:
            return state;
    }
}

//search reducer

//favorites reducer

const store = createStore(
    combineReducers({
        searchResult,
        favorites,
        //search reducer
        //favorites reducer
        favoriteGif
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

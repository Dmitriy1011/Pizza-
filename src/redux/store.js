import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    rootReducer,  
    (rootReducer, composeEnhancers(applyMiddleware(thunk))) // эта функция будет выполнять несколько функций
); //у createStore всегда должен быть reducer
// applyMiddleware означает, что нужно взять функции посредники и использовать их в каждом экшене


export default store;
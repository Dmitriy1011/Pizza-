import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import store from './redux/store';
import { Provider } from 'react-redux';

const inc = () => {
  store.dispatch({
    type:'ADD'
  });
}

store.subscribe(()=> {
  console.log('changed!', store.getState());
})

ReactDOM.render(
    <Router>
      <Provider store={store}>
      <button onClick={inc}>+1</button>
    <App />
    {/* <Route exact path = "/" component={App} /> 
    <Route exact path = "/qwe" component={Header} />  */}
    {/* </BrowserRouter> */}
    </Provider>
    </Router>,
  // 
  document.getElementById('root'),
);

console.log(store.getState());


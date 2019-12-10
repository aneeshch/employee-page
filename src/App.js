import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import LoginPage from './containers/LoginPage.jsx';
import ListingPage from './containers/ListingPage.jsx';
import employeeReducer from './reducers/employee';
import './App.css';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(employeeReducer, applyMiddleware(...middlewares));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <header className="App-header">
            LOGIN
          </header> */}
          <Route path='/' exact component={LoginPage} />
          <Route path='/employee-list' exact component={ListingPage} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

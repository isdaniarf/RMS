/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import WrapperComponent from './components/topComponent'

import { createStore, applyMiddleware, compose } from 'redux';
import rmsApp from './reducers/reducerIndex'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rmsApp, composeEnhancers(applyMiddleware(thunk)));

const App = () => (
    <Provider store={store}>
        {/*<WrapperComponent />*/}
        <Router>
            <div>
                <Route exact path="/" render={() => <WrapperComponent selectedTab={0} />} />
                <Route path="/personalDetail" render={() => <WrapperComponent selectedTab={0} />} />
                <Route path="/employmentHistory" render={() => <WrapperComponent selectedTab={1} />} />
                <Route path="/gradeHistory" render={() => <WrapperComponent selectedTab={2} />} />
                <Route path="/dependants" render={() => <WrapperComponent selectedTab={3} />} />
                <Route path="/locationHistory" render={() => <WrapperComponent selectedTab={5} />} />
            </div>
        </Router>
    </Provider>
);

export default App;
import {hot} from 'react-hot-loader/root'
import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import Routes from './routes';

const mountPoint = document.getElementById("app");


const App = ({store, history}) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes/>
    </ConnectedRouter>
  </Provider>
);

export default hot(App);


// https://scotch.io/tutorials/how-to-make-your-existing-react-app-progressive-in-10-minutes
// https://survivejs.com/webpack/building/bundle-splitting/

// chrome://flags/#enable-desktop-pwas
// chrome://flags#enable-app-banners

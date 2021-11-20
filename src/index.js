import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';

import './styles/_mixins.scss';
import './styles/_main.scss';
import './styles/_typography.scss';
import './styles/_variables.scss';

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)

reportWebVitals();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import { CounterContainer } from './Containers/CounterContainer';

import { store } from './Store';

const node = document.createElement('div');
document.body.appendChild(node);

ReactDOM.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
node);
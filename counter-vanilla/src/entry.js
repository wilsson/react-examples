import { createStore } from 'redux';

// type action
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// catch elements
const textCounter = document.getElementById('counter');
const btnIncrement = document.getElementById('increment');
const btnDecrement = document.getElementById('decrement');

// reducer
const reducer = (state = 0, action) => {
    if(action.type === INCREMENT) {
        return state + 1;
    }
    if(action.type === DECREMENT) {
        return state - 1;
    }
    return state;
}

// store
const store = createStore(reducer);

// initial render
textCounter.innerHTML = store.getState().toString();

const render = () => {
    textCounter.innerHTML = store.getState().toString();
}

store.subscribe(render);

// buttons listeners
btnIncrement.addEventListener('click', () => {
    store.dispatch({ type: INCREMENT });
});

btnDecrement.addEventListener('click', () => {
    store.dispatch({ type: DECREMENT });
});
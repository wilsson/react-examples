import { createStore } from 'redux';

// redux devtool
const reduxDevTool = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

// type actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

interface Store {
    count: number;
}

// reducer
const reducer = (state: Store, action): Store => {
    if(action.type === INCREMENT) {
        return {
            count: state.count + 1
        }
    }
    if(action.type === DECREMENT) {
        return {
            count: state.count - 1
        };
    }
    return state;
}

// store
export const store = createStore(reducer, { count: 0 }, reduxDevTool);
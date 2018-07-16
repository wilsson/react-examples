import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
const store = createStore(reducer, { count: 0 }, reduxDevTool);

const node = document.createElement('div');
document.body.appendChild(node);

interface State {
    count: any;
}

class App extends React.Component<{}, State> {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        store.subscribe(() => {
            this.setState({
                count: store.getState().count
            })
        })
    }
    handleIncrement = () => {
        store.dispatch({
            type: INCREMENT
        })
    }
    handleDecrement = () => {
        store.dispatch({
            type: DECREMENT
        })
    }
    render(): JSX.Element {
        let { count } = this.state;
        return(
            <div>
                <p>{count}</p>
                <button onClick={this.handleIncrement}>increment</button>
                <button onClick={this.handleDecrement}>decrement</button>
            </div>
        )
    }
}

ReactDOM.render(<App/>, node);
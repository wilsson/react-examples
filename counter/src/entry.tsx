import * as React from 'react';
import * as ReactDOM from 'react-dom';

const node = document.createElement('div');
document.body.appendChild(node);

interface State {
    count: number;
}

class App extends React.Component<{}, State> {
    state = {
        count: 0
    };
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1
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
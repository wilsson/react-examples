import { connect } from 'react-redux';
import { increment, decrement } from '../../actionCreators'
import { Counter } from '../../Components/Counter'

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrement() {
            console.log('handleIncrement');
            dispatch(increment());
        },
        handleDecrement() {
            console.log('handleDecrement');
            dispatch(decrement());
        }
    }
}

export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
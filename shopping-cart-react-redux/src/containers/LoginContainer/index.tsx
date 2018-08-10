import * as React from 'react';
import { connect } from 'react-redux';
import { Login } from '../../components/Login';
import { fetchLogin } from '../../actions/login';

interface Props {
    loggedIn: boolean;
    dispatch: Function;
    user: string;
    isFetching: boolean;
}

class LoginContainer extends React.Component<Props, {}> {
    user = {
        name: '',
        password: ''
    }
    handleChange = ({ target }) => {
        let name = target.name;
        let value = target.value;
        this.user[name] = value;
    }
    handleClick = (event) => {
        this.props.dispatch(fetchLogin(this.user));
    }
    render(): JSX.Element {
        console.log('render LoginContainer');
        return <Login
            isFetching={this.props.isFetching}
            loggedIn={this.props.loggedIn}
            user={this.props.user}
            handleChange={this.handleChange}
            handleClick={this.handleClick} />
    }
}

const mapStateToProps = ({ login }) => ({
    loggedIn: login.loggedIn,
    user: login.user,
    isFetching: login.isFetching
});
const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Menu } from 'semantic-ui-react';
import  ProductListContainer from './containers/ProductListContainer';
import { ShoppingCartContainer } from './containers/ShoppingCartContainer';
import LoginContainer from './containers/LoginContainer';
import configureStore from './store/configureStore';

const store = configureStore();

const App = () => (
    <React.Fragment>
        <Menu stackable>
            <Menu.Item>
                E-Commerce
            </Menu.Item>
            <Menu.Item position='right'>
                <LoginContainer />
            </Menu.Item>
        </Menu>
        <Grid container>
            <Grid.Column width="10">
                <Grid columns="3">
                    <ProductListContainer />
                </Grid>
            </Grid.Column>
            <Grid.Column width="6">
                <ShoppingCartContainer />
            </Grid.Column>
        </Grid>
    </React.Fragment>
)

const node = document.createElement('div');
document.body.appendChild(node);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, node);
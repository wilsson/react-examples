import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { ProductListContainer } from './containers/ProductListContainer';
import { ShoppingCartContainer } from './containers/ShoppingCartContainer';
import { Confirm, Table, Grid, Menu } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import { store } from './store';

const node = document.createElement('div');
document.body.appendChild(node);

const App = () => {
    return(
        <React.Fragment>
            <Menu stackable>
                <Menu.Item>
                    E-Commerce
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
}


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, node);
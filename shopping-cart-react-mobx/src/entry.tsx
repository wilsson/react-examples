import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { ProductListContainer } from './containers/ProductListContainer';
import { ShoppingCartContainer } from './containers/ShoppingCartContainer';
import { Confirm, Table, Grid, Image, Icon, Card, Feed, Button, Menu, Label, Divider } from 'semantic-ui-react';

import { Provider, inject, observer } from 'mobx-react';
import { ShoppingCartStore } from './stores/ShoppingCartStore';
import { ProductStore } from './stores/ProductStore';

// store
const stores = {
    productStore: new ProductStore(),
    shoppingCartStore: new ShoppingCartStore()
}

const node = document.createElement('div');
document.body.appendChild(node);

class App extends React.Component {
    render(): JSX.Element {
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
}

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
, node);
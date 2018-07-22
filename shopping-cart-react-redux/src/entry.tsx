import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { ProductList } from './components/ProductList';
import { ShoppingCart } from './components/ShoppingCart';
import { Confirm, Table, Grid, Image, Icon, Card, Feed, Button, Menu, Label, Divider } from 'semantic-ui-react';


const node = document.createElement('div');
document.body.appendChild(node);

interface State {
    products: any[];
    cart: any[];
    open: boolean;
}

class App extends React.Component <{}, State> {
    state = {
        open: false,
        products: [
            {
                image: 'https://i.linio.com/p/5e5515b735b353321ff410490dd3e04f-product.jpg',
                name: 'Iphone 6',
                price: 800
            },
            {
                image: 'https://i.linio.com/p/572c875e25b329ad72f42e1dc1558619-card.jpg',
                name: 'Nintendo Switch',
                price: 1500
            }
        ],
        cart: []
    }
    handleAddToCart = (product) => {
        let { cart } = this.state;
        this.setState({
            cart: [...cart, product]
        })
    }
    handleRemoveToCart = (product) => {
        let { cart } = this.state;
        let newCart = cart.filter((item) => item.name !== product.name);
        this.setState({
            cart: newCart
        })
    }
    handleToogleModal = () => {
        let { open } = this.state;
        this.setState({
            open: !open
        })
    }
    handleConfirmPurchase = () => {
        this.handleToogleModal();
        this.setState({
            cart: []
        })
    }
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
                            <ProductList products={this.state.products} handleAddToCart={this.handleAddToCart} />
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width="6">
                        <ShoppingCart
                            cart={this.state.cart}
                            handleRemoveToCart={this.handleRemoveToCart}
                            handleToogleModal={this.handleToogleModal} />
                    </Grid.Column>
                </Grid>
                <Confirm
                    open={this.state.open}
                    onCancel={this.handleToogleModal}
                    content="Confirmar compra"
                    cancelButton="Cancelar"
                    confirmButton="Comprar"
                    onConfirm={this.handleConfirmPurchase}
                    size="tiny" />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, node);
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Confirm } from 'semantic-ui-react';


import { ShoppingCart } from '../../components/ShoppingCart';
import { ShoppingCartStore } from '../../stores/ShoppingCartStore';

interface Props {
    shoppingCartStore?: ShoppingCartStore;
    handleToogleModal?: any;
}

@inject('shoppingCartStore')
@observer
export class ShoppingCartContainer extends React.Component<Props, {}> {
    state = {
        open: false
    }
    handleRemoveToCart = (product) => {
        this.props.shoppingCartStore.removeFromCart(product);
    }
    handleToogleModal = () => {
        let { open } = this.state;
        this.setState({
            open: !open
        })
    }
    handleConfirmPurchase = () => {
        this.handleToogleModal();
        this.props.shoppingCartStore.cart = [];
    }
    render(): JSX.Element {
        return(
            <React.Fragment>
                <ShoppingCart
                    cart={this.props.shoppingCartStore.cart}
                    handleRemoveToCart={this.handleRemoveToCart}
                    handleToogleModal={this.handleToogleModal} />
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
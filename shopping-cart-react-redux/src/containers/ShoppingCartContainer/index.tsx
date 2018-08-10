import * as React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, confirmPurchase } from '../../actions/cart';
import { ShoppingCart } from '../../components/ShoppingCart'
import { ProductModel } from '../../models/product';

interface State {
    open: boolean;
}

interface Props {
    cart?: ProductModel[];
    handleRemoveToCart?: any;
    handleToogleModal?: any;
    handleConfirmPurchase?: any;
    loggedIn?: boolean;
}

class Container extends React.Component<Props, State> {
    state = {
        open: false
    }
    handleToogleModal = () => {
        let { open } = this.state;
        this.setState({ open: !open });
    }
    render(): JSX.Element {
        return(
            <ShoppingCart
                {...this.props}
                open={this.state.open}
                handleToogleModal={this.handleToogleModal}
                loggedIn={this.props.loggedIn}
            />
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    loggedIn: state.login.loggedIn
});

const mapDispatchToProps = dispatch => ({
    handleRemoveToCart(product) {
        dispatch(removeFromCart(product));
    },
    handleConfirmPurchase() {
        dispatch(confirmPurchase());
    }
});

export const ShoppingCartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);



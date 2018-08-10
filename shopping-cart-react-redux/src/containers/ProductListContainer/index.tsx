import * as React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cart';
import { ProductList } from '../../components/ProductList'
import { Message } from 'semantic-ui-react'
import { fetchProducts } from '../../actions/products';
import { ProductModel } from '../../models/product';

interface Props {
    products: ProductModel[];
    isFetching: boolean;
    error: boolean;
    handleAddToCart: any;
    dispatch: Function;
}
class ProductListContainer extends React.Component<Props, {}> {
    componentWillMount() {
        this.props.dispatch(fetchProducts());
    }
    render(): JSX.Element {
        if(this.props.isFetching) {
            return <h1>Cargando...</h1>
        }
        if(this.props.error) {
            return <Message style={{marginTop: 20}} negative>Ocurrio un error</Message>
        }
        return <ProductList products={this.props.products} handleAddToCart={this.props.handleAddToCart} />
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    isFetching: state.products.isFetching,
    error: state.products.error
});

const mapDispatchToProps = dispatch => ({
    handleAddToCart(product) {
        dispatch(addToCart(product));
    },
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListContainer);
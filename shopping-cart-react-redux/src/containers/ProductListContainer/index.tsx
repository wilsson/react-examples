import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import { ProductList } from '../../components/ProductList'

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    handleAddToCart(product) {
        dispatch(addToCart(product));
    }
});

export const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
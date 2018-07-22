import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { ProductList } from '../../components/ProductList';
import { ShoppingCartStore } from '../../stores/ShoppingCartStore';
import {ProductStore } from '../../stores/ProductStore';

interface Props {
    shoppingCartStore?: ShoppingCartStore;
    productStore?: ProductStore;
}

@inject('productStore', 'shoppingCartStore')
@observer
export class ProductListContainer extends React.Component<Props, {}> {
    handleAddToCart = (product) => {
        this.props.shoppingCartStore.addToCart(product);
    }
    render(): JSX.Element {
        return <ProductList products={this.props.productStore.products} handleAddToCart={this.handleAddToCart} />
    }
}
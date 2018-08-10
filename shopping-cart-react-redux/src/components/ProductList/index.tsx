import * as React from 'react';
import { Product } from '../Product';
import { Grid, Message } from 'semantic-ui-react'

interface Props {
    products?: any[];
    handleAddToCart?: any;
}

export const ProductList: React.SFC<Props> = ({ products, handleAddToCart }) => (
    <React.Fragment>
        {products.map((product, i) => (
            <Grid.Column key={i}>
                <Product {...product} handleAddToCart={ () => handleAddToCart(product)}/>
            </Grid.Column>
        ))}
    </React.Fragment>
)
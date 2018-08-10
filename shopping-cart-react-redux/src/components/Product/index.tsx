import * as React from 'react';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'
import { ProductModel } from '../../models/product';

interface Props extends ProductModel {
    handleAddToCart?: any;
}

export const Product: React.SFC<Props> = ({
    image,
    name,
    price,
    handleAddToCart
}) => (
    <Card style={{width: "180px"}}>
        <Label color="orange" attached="top">
            S/ {price}
        </Label>
        <Image src={image} />
        <Card.Content>
            <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
            <Button primary size="tiny" onClick={handleAddToCart} className="qa-btn_add-to-cart">
                <Icon name="shop" />
                Añadir al carrito
            </Button>
        </Card.Content>
    </Card>
)
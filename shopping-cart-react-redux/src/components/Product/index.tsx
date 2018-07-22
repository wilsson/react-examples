import * as React from 'react';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react'

export const Product = ({
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
            <Button primary size="tiny" onClick={handleAddToCart}>
                <Icon name="shop" />
                Añadir al carrito
            </Button>
        </Card.Content>
    </Card>
)
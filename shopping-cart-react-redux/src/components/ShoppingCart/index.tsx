import * as React from 'react';

import { Table, Icon, Button, Confirm } from 'semantic-ui-react';

interface Props {
    cart?: any[];
    open?: boolean;
    handleRemoveToCart?: any;
    handleToogleModal?: any;
    handleConfirmPurchase?: any;
}
export const ShoppingCart: React.SFC<Props> = ({
    cart,
    handleRemoveToCart,
    open,
    handleToogleModal,
    handleConfirmPurchase
}) => (
    <React.Fragment>
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Producto</Table.HeaderCell>
                    <Table.HeaderCell>Precio</Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {cart.map((product, i) => (
                    <Table.Row key={i}>
                        <Table.Cell>{product.name}</Table.Cell>
                        <Table.Cell>S/ {product.price}</Table.Cell>
                        <Table.Cell>
                            <Button color="red" icon size="mini" onClick={() => handleRemoveToCart(product)}>
                            <Icon name='trash alternate' />
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                <Table.HeaderCell>
                    <b>Total</b>
                </Table.HeaderCell>
                <Table.HeaderCell>
                    <b>S/ {cart.reduce((sum, product) => sum + product.price, 0)}</b>
                </Table.HeaderCell>
                    <Table.HeaderCell />
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell>
                        <Button icon primary size='tiny' onClick={handleToogleModal}>
                            <Icon name='send' /> Comprar
                        </Button>
                    </Table.HeaderCell>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Footer>
        </Table>
        <Confirm
            open={open}
            onCancel={handleToogleModal}
            content="Confirmar compra"
            cancelButton="Cancelar"
            confirmButton="Comprar"
            onConfirm={() => {
                handleConfirmPurchase();
                handleToogleModal();
            }}
            size="tiny"/>
    </React.Fragment>
)
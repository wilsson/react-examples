import {  observable, action } from 'mobx';

export class ShoppingCartStore {
    @observable cart = [];

    @action
    addToCart(product) {
        this.cart = [...this.cart, product];
    }

    @action
    removeFromCart(product) {
        let newCart = this.cart.filter(item => item.name !== product.name);
        this.cart = [...newCart];
    }
}
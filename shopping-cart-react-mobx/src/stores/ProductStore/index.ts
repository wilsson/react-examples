import { observable } from 'mobx';

export class ProductStore {
    @observable products = [
        {
            image: 'https://i.linio.com/p/5e5515b735b353321ff410490dd3e04f-product.jpg',
            name: 'Iphone 6',
            price: 800
        },
        {
            image: 'https://i.linio.com/p/572c875e25b329ad72f42e1dc1558619-card.jpg',
            name: 'Nintendo Switch',
            price: 1500
        }
    ];
}
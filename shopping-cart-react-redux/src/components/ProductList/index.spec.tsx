import * as React from 'react';
import { shallow, render, mount } from 'enzyme';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { ProductList } from './';
import { Product } from '../Product';

it('Render with products', () => {
    let products = [
        {
            "image": "https://i.linio.com/p/572c875e25b329ad72f42e1dc1558619-card.jpg",
            "name": "Nintendo Switch",
            "price": 1500
        }
    ]

    const component = shallow(<ProductList products={products} />);
    console.log('>>', component);
    expect(component.find(Product).length).toBe(1);
})
import React , {Component} from 'react';

import 'antd/dist/antd.css';
import '../components/style/Content.css';
import { Layout, Breadcrumb } from 'antd';

import CartItem from '../components/CartItem';
import { cartContext } from '../context/cartContext';

const {  Content} = Layout;
class Cart extends Component{
    render(){
        return (
        <div className="Cart">
                <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Cart</Breadcrumb.Item>
                        </Breadcrumb>
                    <div className="site-layout-content">
                    <cartContext.Consumer>
                        {
                            (cart) => ( cart.cart.map((item, index) => (
                                <CartItem key={index} products={item}/>
                            )))
                        }
                    </cartContext.Consumer>
                    </div>
                </Content>
        </div>
        );
    }
}
export default Cart;
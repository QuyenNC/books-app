import React , {Component} from 'react';
import { Link} from "react-router-dom";
import 'antd/dist/antd.css';
import '../components/style/Header.css';
import { Layout, Menu} from 'antd';
import { cartContext } from '../context/cartContext';
const { Header} = Layout;
class Headerindex extends Component{
    render(){
        return (
            
                <div className="Headerindex">
                    <Header className="header">
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/products">Products</Link></Menu.Item>
                            <Menu.Item key="3">
                                <cartContext.Consumer>
                                    {
                                        (cart) => ( <Link to="/cart">Cart ({cart.cart.length})</Link>)
                                    }
                                </cartContext.Consumer>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </div>
        );
    }
}
export default Headerindex;
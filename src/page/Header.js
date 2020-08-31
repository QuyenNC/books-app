import React , {Component} from 'react';
import { Link} from "react-router-dom";
import 'antd/dist/antd.css';
import '../components/style/Header.css';
import { Layout, Menu} from 'antd';
import { cartContext } from '../context/cartContext';
const { Header} = Layout;
class Headerindex extends Component{
    constructor(){
        super();
        const token = localStorage.getItem('username');
        console.log(token);
        let auth = true;
        if(token === null){
            auth = false
        }
        this.state={
            auth : auth
        }
        this.logout= this.logout.bind(this);
    }
    logout(){
        const auth = this.state.auth;
        localStorage.removeItem('username');
        this.setState({
            auth : !auth
        })
    }
    render(){
        return (
                <div className="Headerindex">
                    <Header className="header">
                        <div className="logo" />
                        {
                            (this.state.auth === false)  ? (
                                <Menu theme="dark" mode="horizontal" >
                                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/products">Products</Link></Menu.Item>
                                    <Menu.Item key="3">
                                        <cartContext.Consumer>
                                            {
                                                (cart) => ( <Link to="/cart">Cart ({cart.cart.length})</Link>)
                                            }
                                        </cartContext.Consumer>
                                    </Menu.Item>
                                    <Menu.Item key="4"><Link to="/login">Login</Link></Menu.Item>  
                                    <Menu.Item key="5"><Link to="/register">Register</Link></Menu.Item>
                                </Menu>
                            ) :(
                                <Menu theme="dark" mode="horizontal" >
                                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/products">Products</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/post">Post</Link></Menu.Item>
                                    <Menu.Item key="4">
                                        <cartContext.Consumer>
                                            {
                                                (cart) => ( <Link to="/cart">Cart ({cart.cart.length})</Link>)
                                            }
                                        </cartContext.Consumer>
                                    </Menu.Item>
                                    <Menu.Item key="5" onClick={this.logout}>Logout</Menu.Item>
                                </Menu>
                            )

                        }
                        
                    </Header>
                </div>
        );
    }
}
export default Headerindex;
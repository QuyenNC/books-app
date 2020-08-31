import React from 'react';
import './App.css';
import { Layout} from 'antd';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Headerindex from './page/Header';
import Products from './page/Products';
import Footers from './page/Footer';
import Cart from './page/Cart';
import Login from './login/Login';
import Register from './register/Register';
import Post from './page/Post';
import  CartProvider from './context/cartContext';

export default function App()  {
  return (
    <CartProvider>
        <Router>
           <div className="App">
           <Layout className="layout">
               <Headerindex />
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/cart">  
                    <Cart />
                  </Route>
                  <Route path="/products">
                    <About />
                  </Route>
                  <Route path="/post">
                    <Post />
                  </Route>
                  <Route path="/">
                    <Products />
                  </Route>
                  
                </Switch>
                <Footers />
            </Layout>
          </div>
      </Router>
    </CartProvider>
  );
}

function About() {
  return <h2>About</h2>;
}

import React from 'react';
import './App.css';
import { Layout} from 'antd';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Headerindex from './page/Header';
import Products from './page/Products';
import Footers from './page/Footer';


import  CartProvider from './context/cartContext';

export default function App()  {
  return (
    <CartProvider>
        <Router>
           <div className="App">
           <Layout className="layout">
               <Headerindex />
                <Switch>
                  <Route path="/cart">  
                    <Home />
                  </Route>
                  <Route path="/products">
                    <About />
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
function Home() {
  return <h2>Users</h2>;
}

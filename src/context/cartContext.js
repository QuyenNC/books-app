import React , { Component }from 'react';
export const cartContext = React.createContext();
class CartProvider extends Component{
    constructor(){
        super();
        this.state = {
            cart: []
        }
        this.addItemToCart = this.addItemToCart.bind(this);
    }
    addItemToCart(item){
        console.log(item);
        this.setState({
            cart:this.state.cart.concat(item)
        })
    }
    render(){
        return (
            <cartContext.Provider value={{
                cart : this.state.cart,
                addItem :this.addItemToCart 
            }}>
                {this.props.children}
            </cartContext.Provider>
        );
    }
}
export default CartProvider;
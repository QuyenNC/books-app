import React , { Component }from 'react';
export const cartContext = React.createContext();
class CartProvider extends Component{
    constructor(){
        super();
        this.state = {
            cart: []
        }
        this.addItemToCart = this.addItemToCart.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    addItemToCart(item){
        this.setState({
            cart:this.state.cart.concat(item)
        })
    }
    removeItem(item){
        const index = this.state.cart.indexOf(item);
        this.state.cart.splice(index,1)
        this.setState({
            cart:this.state.cart
        })
    }
    render(){
        return (
            <cartContext.Provider value={{
                cart : this.state.cart,
                addItem :this.addItemToCart,
                removeItem:this.removeItem
            }}>
                {this.props.children}
            </cartContext.Provider>
        );
    }
}
export default CartProvider;
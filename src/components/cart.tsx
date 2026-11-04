 import {useContext} from 'react';
 import {CartDataContext} from '../utils/cartDataContext'
 export default function Cart(){
    let {cartData,setCartData} = useContext(CartDataContext)
    console.log(cartData,'cartData')
    return(
        <>
        <h1>Cart</h1>
        {cartData.quantity == 0? 
        <div>Cart is empty! Go back shopping</div>:
        <>
        <div className="cart-totals">
            Total Items: {cartData.quantity}
        </div>
        <div className="cart-card">
            <div className="cart-card-left">

            </div>
            <div className="cart-card-right">
            </div>
        </div>
        </>}
        </>
    )

 }
 import {useContext} from 'react';
 import {CartDataContext} from '../utils/cartDataContext'
 import {useSelector,useDispatch} from 'react-redux'
 import {clearCart} from '../utils/slicesUtils/cartSlice'
 export default function Cart(){
   // let {cartData,setCartData} = useContext(CartDataContext)
    const cartData = useSelector((store)=> store.cart.items)
    console.log(cartData)
    console.log(cartData,'cartData')
    const dispatch = useDispatch();
    const clearCartFunc =()=>{
        dispatch(clearCart());
    }
    return(
        <>
        <h1>Cart</h1>
        {cartData.length == 0? 
        <div>Cart is empty! Go back shopping</div> :
        <>
        <div className="cart-totals">
            Total Items: {cartData.length}
        </div>
        <div className="cart-card">
            <div className="cart-card-left">

            </div>
            <div className="cart-card-right">
            </div>
        </div>
        <button onClick={clearCartFunc}>clearcart</button>
        </>}
        </>
    )

 }
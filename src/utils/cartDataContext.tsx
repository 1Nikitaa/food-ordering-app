import {createContext} from 'react'

export const defaultCartItem = {
    items:[],
    quantity:0,
    totalPrice:0
}
 export const CartDataContext = createContext(defaultCartItem)
 

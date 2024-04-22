import { createStore , combineReducers , applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import { ProductListReducer , ProductDetailReducer } from "./reducer/ProductReducer"
import { CartReducer } from "./reducer/CartReducer"

const reducer = combineReducers({
    ProductList : ProductListReducer,
    ProductDetail : ProductDetailReducer ,
    cart : CartReducer
})

const cartItemsFromLocalStorage = localStorage.getItem("cartItems") ? 
JSON.parse(localStorage.getItem("cartItems")) : []

const initailState = {
    cart : { cartItems : cartItemsFromLocalStorage }
}

const middleWare = [thunk]

const store = createStore(reducer , initailState , applyMiddleware(...middleWare))

export default store

/* import { configureStore } from "@reduxjs/toolkit"
import { ProductListReducer , ProductDetailReducer  } from "./reducer/ProductReducer"
import { CartReducer } from "./reducer/CartReducer"

const store = configureStore({
    reducer: {
        ProductList : ProductListReducer ,
        ProductDetail : ProductDetailReducer ,
        cart : CartReducer
    }
})

export default store */
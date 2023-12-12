import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
// import {createStore} from "redux";

export default configureStore({
    reducer:{
        cart:cartSlice,
    }
});
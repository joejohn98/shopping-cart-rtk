import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(),
        name: "Product 1",
        price: 29.99,
        category: "Kitchen",
        description: "Elit ut culpa magna laborum ea. Magna ut sunt ea labore laboris irure aliqua sunt. Ipsum eu veniam ut mollit sint duis laborum nostrud nostrud eiusmod.",
        image: "https://images.unsplash.com/photo-1529653762956-b0a27278529c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2023-10-01"
    },
    {
        id: uuidv4(),
        name: "Product 2",
        category: "Electronics",
        price: 49.99,
        description: "Elit ut culpa magna laborum ea. Magna ut sunt ea labore laboris irure aliqua sunt. Ipsum eu veniam ut mollit sint duis laborum nostrud nostrud eiusmod.",
        image: "https://images.unsplash.com/photo-1529653762956-b0a27278529c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2023-10-02"
    },
    {
        id: uuidv4(),
        name: "Product 3",
        category: "Clothing",
        price: 19.99,
        description: "Elit ut culpa magna laborum ea. Magna ut sunt ea labore laboris irure aliqua sunt. Ipsum eu veniam ut mollit sint duis laborum nostrud nostrud eiusmod.",
        image: "https://images.unsplash.com/photo-1529653762956-b0a27278529c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2023-10-03"
    }
]

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push({
                id: uuidv4(),
                ...action.payload
            })
        }
    }
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer;
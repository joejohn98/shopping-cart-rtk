import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

const initialState = [
    {
        id: uuidv4(),
        name: "Product 1",
        price: 29.99,
        description: "Elit ut culpa magna laborum ea. Magna ut sunt ea labore laboris irure aliqua sunt. Ipsum eu veniam ut mollit sint duis laborum nostrud nostrud eiusmod.",
        image: "https://unsplash.com/photos/person-holding-space-gray-iphone-x-h7a6g0ua6LM",
        date: "2023-10-01"
    },
    {
        id: uuidv4(),
        name: "Product 2",
        price: 49.99,
        description: "Elit ut culpa magna laborum ea. Magna ut sunt ea labore laboris irure aliqua sunt. Ipsum eu veniam ut mollit sint duis laborum nostrud nostrud eiusmod.",
        image: "https://unsplash.com/photos/person-holding-space-gray-iphone-x-h7a6g0ua6LM",
        date: "2023-10-02"
    },
    {
        id: uuidv4(),
        name: "Product 3",
        price: 19.99,
        description: "Elit ut culpa magna laborum ea. Magna ut sunt ea labore laboris irure aliqua sunt. Ipsum eu veniam ut mollit sint duis laborum nostrud nostrud eiusmod.",
        image: "https://unsplash.com/photos/person-holding-space-gray-iphone-x-h7a6g0ua6LM",
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
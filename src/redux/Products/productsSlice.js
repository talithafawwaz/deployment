import { createSlice } from "@reduxjs/toolkit";
    
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
            listProduct: [
                {
                    productId: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
                    productName: "John",
                    productCategory: "Doe",
                    productFreshness: "Doe",
                    imageOfProduct: "Doe",
                    additionalDescription: "Doe",
                    productPrice: "Doe"
                },

                {
                        productId: "f7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
                        productName: "John",
                        productCategory: "Doe",
                        productFreshness: "Doe",
                        imageOfProduct: "Doe",
                        additionalDescription: "Doe",
                        productPrice: "Doe"
                },

                {
                    productId: "g7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
                    productName: "John",
                    productCategory: "Doe",
                    productFreshness: "Doe",
                    imageOfProduct: "Doe",
                    additionalDescription: "Doe",
                    productPrice: "Doe"
                }
            ]
        },
    reducers: {
        addProduct: (state, actions) => {
            return {...state, listProduct: [...state.listProduct, actions.payload]}
        },
        updateProduct: (state, actions) => {
            state.listProduct = state.listProduct.map(product => product.productId === actions.payload.productId ? actions.payload : product)
        },
        deleteProduct: (state, actions) => {
            if (window.confirm("Apakah anda ingin menghapus data?")) {
                state.listProduct = state.listProduct.filter(product => product.productId != actions.payload)
            }
        }
    }
})

// export action
export const {addProduct, updateProduct, deleteProduct} = productsSlice.actions

// export reducer
export default productsSlice.reducer

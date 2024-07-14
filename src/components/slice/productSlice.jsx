import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cartItem: [],
  },
  reducers: {
    addTocart: (state,action) => {
     let findProduct = state.cartItem.findIndex((item)=> item.id == action.payload.id)
     console.log(findProduct);
    },

  },
})

// Action creators are generated for each case reducer function
export const { addTocart } = productSlice.actions

export default productSlice.reducer 
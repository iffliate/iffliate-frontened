import { configureStore } from '@reduxjs/toolkit';
import signupSlice from './signup/signupSlice';
import signinSlice from './siginin/signinSlice';
import ShopSlice from './Shop/ShopSlice';
import ProductSlice from './Product/ProductSlice';
export const store = configureStore({
  reducer: {
    signup:signupSlice,
    sign_in:signinSlice,
    shop:ShopSlice,
    product:ProductSlice,
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type sliceStatus = 'idle'|'pending'|'success'|'error'|'creating'|'created'|'updating'|'updated'|'deleted'
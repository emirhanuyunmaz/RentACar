import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './user/userStore'
// import { adminApi } from './admin/adminStore'
import { carApi } from './car/carStore'

export const store = configureStore({
  reducer: {
    
    [userApi.reducerPath] : userApi.reducer,
    [carApi.reducerPath] : carApi.reducer

    // [adminApi.reducerPath] : adminApi.reducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware).concat(carApi.middleware)
})

setupListeners(store.dispatch)
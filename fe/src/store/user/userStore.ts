import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { UserCreateGetType, UserCreatePostType, UserLoginGetType, UserLoginPostType, userProfile } from '../../types/User'
import { Cookies } from 'typescript-cookie'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL +"/user" ,
        headers:{
            token:Cookies.get("token") as string
        }
  }),
  endpoints: (builder) => ({
    deneme: builder.query<any,any>({
      query: () => `/`,
    }),

    createUser:builder.mutation <UserCreateGetType,UserCreatePostType> ({
      query:(body) => ({
        url:"/create",
        method:"POST",
        body:body
        }),      
    }),
    
    loginUser:builder.mutation<UserLoginGetType,UserLoginPostType>({
      query:(body) => ({
        url:"/login",
        method:"POST",
        body:body
      }),
    }),

    getProfile: builder.query<userProfile,any>({
      query: () => `/profile`,
    }),


  }),
})

export const { useDenemeQuery , useCreateUserMutation , useLoginUserMutation , useGetProfileQuery} = userApi
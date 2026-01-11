import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { UserCreateGetType, UserCreatePostType, UserLoginGetType, UserLoginPostType, userProfile, userUpdatePut } from '../../types/User'
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

    updateUser:builder.mutation<any,userUpdatePut>({
      query:(body) => ({
        url:"/update",
        method:"PUT",
        body:body
      })
    }),

    getAllUser:builder.query<any,any>({
      query : (page:number) => `/getAllUser?page=${page}`,
    }),

    adminGetUser:builder.query<any,any>({
      query:(id:string) => `/adminGetUserProfile?id=${id}`
    }),

    adminUpdateUser:builder.mutation<any,any>({
      query:(body) => ({
        url:"/adminUpdateUser",
        method:"PUT",
        body:body
      })
    }),

    adminDeleteUser:builder.mutation<any,any>({
      query:(body) => ({
        url:`/adminUserDelete`,
        method:"DELETE",
        body:body
      })
    })


  }),
})

export const { useDenemeQuery , useCreateUserMutation , useLoginUserMutation , useGetProfileQuery , useUpdateUserMutation , useGetAllUserQuery , useAdminGetUserQuery , useAdminUpdateUserMutation , useAdminDeleteUserMutation} = userApi
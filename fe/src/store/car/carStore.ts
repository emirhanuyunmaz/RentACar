import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cookies } from "typescript-cookie";


export const carApi = createApi({
    reducerPath:"carApi",
    baseQuery:fetchBaseQuery({
        baseUrl:import.meta.env.VITE_BASE_API_URL + "/car",
        headers : {
            token : Cookies.get("token") as string
        }
    }),

    endpoints : (builder) => ({

        denemeCar : builder.query<any,any>({
            query:() => `/deneme`,
        }),

        carEquipmentList : builder.query<any,any>({
            query:() => `/carEquipmentList`,
        }),

        createCar :builder.mutation<any,any>({
            query:(body) => ({
                url:"/create",
                method:"POST",
                body:body
            })
        }),

        getAllCarListShow:builder.query<any,any>({
            query : (query) => `/carList?page=${query.page}&category=${query.category}`
        }),
        
        getAllCarList:builder.query<any,any>({
            query : (query) => `/getAllCars?page=${query.page}&searchText=${query.searchText}`
        }),

        getCar : builder.query<any,any>({
            query: (query) => `/getCar?id=${query.id}` 
        }),

        adminUpdateCar : builder.mutation<any,any>({
            query:(body) => ({
                url:`/adminUpdateCar`,
                method:"POST",
                body:body
            })
        }),

        adminDeleteImage:builder.mutation<any,any>({
            query:(body) =>({
                url:"/adminDeleteCarImage",
                method:"DELETE",
                body:body
            })
        }),

        adminDeleteCar:builder.mutation({
            query:(body) => ({
                url:"/adminDeleteCar",
                method:"DELETE",
                body:body
            })
        }),

        getSubCarList:builder.query({
            query : (query) => `/getSubCarList?page=${query.page}&category=${query.category}`
        })

    })
})
export const { useDenemeCarQuery,useCreateCarMutation,useCarEquipmentListQuery , useGetAllCarListQuery , useGetCarQuery , useGetAllCarListShowQuery, useAdminUpdateCarMutation , useAdminDeleteImageMutation , useAdminDeleteCarMutation , useGetSubCarListQuery} = carApi
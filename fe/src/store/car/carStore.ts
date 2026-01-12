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

        getAllCarList:builder.query<any,any>({
            query : (page) => `/getAllCars?page=${page}`
        }),

        adminGetCar : builder.query<any,any>({
            query: (id) => `/adminGetCar?id=${id}` 
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
        })


    })
})
export const { useDenemeCarQuery,useCreateCarMutation,useCarEquipmentListQuery , useGetAllCarListQuery , useAdminGetCarQuery , useAdminUpdateCarMutation , useAdminDeleteImageMutation , useAdminDeleteCarMutation} = carApi
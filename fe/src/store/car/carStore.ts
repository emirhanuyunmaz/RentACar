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

    })
})
export const {useDenemeCarQuery,useCreateCarMutation,useCarEquipmentListQuery} = carApi
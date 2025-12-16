import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Cookies } from "typescript-cookie";

export const adminApi = createApi({
    reducerPath : 'adminApi',
    baseQuery : fetchBaseQuery({
        baseUrl : import.meta.env.VITE_BASE_URL + "/admin",
        headers:{
            token:Cookies.get("token") as string
        }

    }),

    endpoints:(builder) => ({
        
        adminDeneme:builder.query<any,any>({
            query:() => `/deneme`
        }),

    })
})

export const {useAdminDenemeQuery} = adminApi
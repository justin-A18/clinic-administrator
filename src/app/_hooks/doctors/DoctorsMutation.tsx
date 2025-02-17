"use client"
import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { HttpAdapter } from "@/config/adapters/http";
import { DoctorsGetUseCase } from "@/core/use-cases/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "usehooks-ts";


const [ setUserStorage] = useLocalStorage<string>("token", "");
const { setToken , token} = authStore();
export const UseQueryDoctorsGet = useQuery({
    queryKey: ['doctors', setToken],
    queryFn: ()=> {
        return DoctorsGetUseCase
    } 
    
})



// const DoctorsPostHook = async ( apiFetcher: HttpAdapter,  body: Record<string, unknown>) => {
//     const doctorsPostMutation = useMutation({
//         mutationFn: () => {
//             DoctorsPostUseCase
//         }
//     })
//     DoctorsPostUseCase
// }
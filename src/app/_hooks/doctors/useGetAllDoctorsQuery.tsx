"use client"
import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { getAllDoctorsUseCase } from "@/core/use-cases/auth";
import { useQuery } from "@tanstack/react-query";

export const GetAllDoctors = () => {
    
    const { token } = authStore();
    
     const GetAllDoctorsQuery = useQuery({
        queryKey: ['doctors', token],
        queryFn: () => {
            return getAllDoctorsUseCase(apiFetcher, token)
        }
    })


    return {
        ...GetAllDoctorsQuery
    }
}




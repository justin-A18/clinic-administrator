"use client"
import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { getDetailsDoctorUseCase } from "@/core/use-cases/doctors/get-details-doctor.use-case";
import { useQuery } from "@tanstack/react-query";

export const useGetDetailsByIdDoctorsQuery = (id: number) => {
    
    const { token } = authStore();
    
     const GetDetailsByIdDoctorQuery = useQuery({
        queryKey: ['doctors', {token,id}],
        queryFn: () => {
            return getDetailsDoctorUseCase(apiFetcher,id, token)
        }
    })


    return {
        GetDetailsByIdDoctorQuery
    }
}




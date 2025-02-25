import { authStore } from "@/app/_providers/store"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { createDoctorsUseCase } from "@/core/use-cases/doctors/create-doctors.use-case"
import {  useMutation } from "@tanstack/react-query"

export const useDoctorsCreateMutation = () => {

    const { token } = authStore()
    
    const DoctorsCreateMutation = useMutation({
        mutationKey: ["doctorcreate", token],
        mutationFn: (body: Record<string, unknown>) => {
            return createDoctorsUseCase(apiFetcher, body, token)
        },

    })

    return {
        DoctorsCreateMutation
    }
}

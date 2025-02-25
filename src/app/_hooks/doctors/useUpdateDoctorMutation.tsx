import { authStore } from "@/app/_providers/store"
import {  useMutation } from "@tanstack/react-query"

export const useDoctorsUpdateMutation = () => {

    const { token } = authStore()
    
    const DoctorsUpdateMutation = useMutation({
        mutationKey: ["doctorcreate", token],
        // mutationFn: (body: Record<string, unknown>, id: number) => {
        //     return updateDoctorstUseCase(apiFetcher, body, id, token)
        // },

    })

    return {
        DoctorsUpdateMutation
    }
}

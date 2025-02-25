import { authStore } from "@/app/_providers/store"
import { apiFetcher } from "@/config/adapters/api.adapter"
import { deleteDoctorstUseCase } from "@/core/use-cases/doctors/delete-doctors.use-case"
import { QueryClient, useMutation } from "@tanstack/react-query"


export const useDeleteDoctorMutation = () => {
    
    const { token } = authStore()
    
    const QClient = new QueryClient()

    const DoctorsDeleteMutation = useMutation({
        mutationKey: ["doctordelete", token],
        mutationFn: (id: number) => {
            return deleteDoctorstUseCase( apiFetcher, id, token )
        },
        onSuccess: () => {
            QClient.invalidateQueries({
                predicate: (query)=> query.queryKey[0] === "doctors" 
            })
            console.log("eliminado con exito")
        }
    })

    return {
        DoctorsDeleteMutation
    }
}

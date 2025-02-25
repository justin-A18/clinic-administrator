import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../toast";
import { deleteDoctorUseCase } from "@/core/use-cases/doctors";

export const useDeleteDoctorMutation = () => {

	const { token } = authStore();

	const queryClient = useQueryClient();


	const deleteDoctorMutation = useMutation({
		mutationKey: ['delete-doctor', token],
		mutationFn: (id: string) => {
			return deleteDoctorUseCase(apiFetcher, id, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['doctors'] });
			toast({
				variant: 'success',
				title: data.message,
				duration: 3000
			});
		},
		onError: (error) => {
			toast({
				variant: 'destructive',
				title: '¡Vaya! Algo salió mal.',
				description: error.message,
				duration: 3000
			});
		}
	});

	return {
		...deleteDoctorMutation,
	};

};

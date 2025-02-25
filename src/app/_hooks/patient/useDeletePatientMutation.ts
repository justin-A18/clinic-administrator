import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { deletePatientUseCase } from "@/core/use-cases/patients";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../toast";

export const useDeletePatientMutation = () => {

	const { token } = authStore();

	const queryClient = useQueryClient();


	const deletePatientMutation = useMutation({
		mutationKey: ['delete-patient', token],
		mutationFn: (id: string) => {
			return deletePatientUseCase(apiFetcher, id, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['patients'] });
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
		...deletePatientMutation,
	};

};

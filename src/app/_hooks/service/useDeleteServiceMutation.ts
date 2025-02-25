import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../toast";
import { deleteServicesUseCase } from "@/core/use-cases/services";

export const useDeleteServiceMutation = () => {

	const { token } = authStore();

	const queryClient = useQueryClient();


	const deleteServiceMutation = useMutation({
		mutationKey: ['delete-service', token],
		mutationFn: (id: string) => {
			return deleteServicesUseCase(apiFetcher, id, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['services'] });
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
		...deleteServiceMutation,
	};

};

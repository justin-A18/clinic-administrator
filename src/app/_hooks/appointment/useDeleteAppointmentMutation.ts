import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../toast";
import { deleteAppointmentUseCase } from "@/core/use-cases/appointment";

export const useDeleteAppointmentMutation = () => {

	const { token } = authStore();

	const queryClient = useQueryClient();


	const deleteAppointmentMutation = useMutation({
		mutationKey: ['delete-appointment', token],
		mutationFn: (id: number) => {
			return deleteAppointmentUseCase(apiFetcher, id, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['appointments'] });
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
		...deleteAppointmentMutation,
	};

};

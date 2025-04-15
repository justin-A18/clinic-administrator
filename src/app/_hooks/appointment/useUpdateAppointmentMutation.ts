import { authStore, useModalStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAppointmentUseCase } from "@/core/use-cases/appointment";
import { toast } from "../toast";

export const useUpdateAppointmentMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const updateAppointmentMutation = useMutation({
		mutationKey: ['update-appointment', token],
		mutationFn: ({ body, id }: { body: Record<string, unknown>, id: string; }) => {
			return updateAppointmentUseCase(apiFetcher, body, id, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['appointments'] });
			closeModal();
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
		...updateAppointmentMutation
	};

};

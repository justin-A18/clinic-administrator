import { authStore, useModalStore } from '@/app/_providers/store';
import { apiFetcher } from '@/config/adapters/api.adapter';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '../toast';
import { createAppointmentUseCase } from '@/core/use-cases/appointment';

export const useCreateAppointmentMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const createAppointmentMutation = useMutation({
		mutationKey: ['create-appointment', token],
		mutationFn: (body: Record<string, unknown>) => {
			return createAppointmentUseCase(apiFetcher, body, token);
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
		...createAppointmentMutation,
	};
};

import { authStore, useModalStore } from '@/app/_providers/store';
import { apiFetcher } from '@/config/adapters/api.adapter';
import { createPatientUseCase } from '@/core/use-cases/patients';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '../toast';

export const useCreatePatientMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const createPatientMutation = useMutation({
		mutationKey: ['create-patient', token],
		mutationFn: (body: Record<string, unknown>) => {
			return createPatientUseCase(apiFetcher, body, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['patients'] });
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
		...createPatientMutation,
	};
};

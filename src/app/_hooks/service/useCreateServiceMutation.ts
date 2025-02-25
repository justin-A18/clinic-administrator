import { authStore, useModalStore } from '@/app/_providers/store';
import { apiFetcher } from '@/config/adapters/api.adapter';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createServiceUseCase } from '@/core/use-cases/services';
import { toast } from '../toast';

export const useCreateServiceMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const createServiceMutation = useMutation({
		mutationKey: ['create-service', token],
		mutationFn: (body: Record<string, unknown>) => {
			return createServiceUseCase(apiFetcher, body, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['services'] });
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
		...createServiceMutation,
	};
};

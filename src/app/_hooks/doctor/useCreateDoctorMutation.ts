import { authStore, useModalStore } from '@/app/_providers/store';
import { apiFetcher } from '@/config/adapters/api.adapter';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '../toast';
import { createDoctorUseCase } from '@/core/use-cases/doctors';

export const useCreateDoctorMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const createDoctorMutation = useMutation({
		mutationKey: ['create-doctor', token],
		mutationFn: (body: Record<string, unknown>) => {
			return createDoctorUseCase(apiFetcher, body, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['doctors'] });
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
		...createDoctorMutation,
	};
};

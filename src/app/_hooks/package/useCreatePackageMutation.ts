import { authStore, useModalStore } from '@/app/_providers/store';
import { apiFetcher } from '@/config/adapters/api.adapter';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '../toast';
import { createPackageUseCase } from '@/core/use-cases/packages';

export const useCreateDoctorMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const createDoctorMutation = useMutation({
		mutationKey: ['create-package', token],
		mutationFn: (body: Record<string, unknown>) => {
			return createPackageUseCase(apiFetcher, body, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['packages'] });
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

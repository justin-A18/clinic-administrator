import { authStore } from '@/app/_providers/store';
import { apiFetcher } from '@/config/adapters/api.adapter';
import { createPatientUseCase } from '@/core/use-cases/patients';
import { useMutation } from '@tanstack/react-query';

export const useCreatePatientMutation = () => {
	const { token } = authStore();

	const createPatientMutation = useMutation({
		mutationKey: ['createPatient', token],
		mutationFn: (body: Record<string, unknown>) => {
			return createPatientUseCase(apiFetcher, body, token);
		},
	});

	return {
		...createPatientMutation,
	};
};

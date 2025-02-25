import { authStore, useModalStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { updatePatientUseCase } from "@/core/use-cases/patients";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../toast";

export const useUpdatePatientMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const updatePatientMutation = useMutation({
		mutationKey: ['update-patient', token],
		mutationFn: ({ body, id }: { body: Record<string, unknown>, id: string; }) => {
			return updatePatientUseCase(apiFetcher, body, id, token);
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
		...updatePatientMutation
	};

};

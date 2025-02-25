import { authStore, useModalStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../toast";
import { updateServiceUseCase } from "@/core/use-cases/services";

export const useUpdateServiceMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const updateServiceMutation = useMutation({
		mutationKey: ['update-patient', token],
		mutationFn: ({ body, id }: { body: Record<string, unknown>, id: string; }) => {
			return updateServiceUseCase(apiFetcher, body, id, token);
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
		...updateServiceMutation
	};

};

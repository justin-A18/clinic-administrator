import { authStore, useModalStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../toast";
import { updateDoctorUseCase } from "@/core/use-cases/doctors";

export const useUpdateDoctorMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const updateDoctorMutation = useMutation({
		mutationKey: ['update-doctor', token],
		mutationFn: ({ body, id }: { body: Record<string, unknown>, id: string; }) => {
			return updateDoctorUseCase(apiFetcher, body, id, token);
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
		...updateDoctorMutation
	};

};

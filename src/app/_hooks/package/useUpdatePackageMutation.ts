import { authStore, useModalStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../toast";
import { updatePackageUseCase } from "@/core/use-cases/packages";

export const useUpdatePackageMutation = () => {
	const { token } = authStore();
	const { closeModal } = useModalStore();

	const queryClient = useQueryClient();

	const updatePackageMutation = useMutation({
		mutationKey: ['update-package', token],
		mutationFn: ({ body, id }: { body: Record<string, unknown>, id: number; }) => {
			return updatePackageUseCase(apiFetcher, body, id, token);
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
		...updatePackageMutation
	};

};

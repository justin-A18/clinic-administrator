import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../toast";
import { deletePackageUseCase } from "@/core/use-cases/packages";

export const useDeletePackageMutation = () => {

	const { token } = authStore();

	const queryClient = useQueryClient();


	const deletePackageMutation = useMutation({
		mutationKey: ['delete-package', token],
		mutationFn: (id: string) => {
			return deletePackageUseCase(apiFetcher, id, token);
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ['packages'] });
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
		...deletePackageMutation,
	};

};

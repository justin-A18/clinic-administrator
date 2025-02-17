import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { getPatientByIdUseCase } from "@/core/use-cases/patients";
import { useQuery } from "@tanstack/react-query";

export const useGetPatientByIdQuery = (id: string) => {

	const { token } = authStore();

	const getPatientByIdQuery = useQuery({
		queryKey: ['patient', { token, id }],
		queryFn: () => {
			return getPatientByIdUseCase(apiFetcher, id, token);
		},
	});

	return {
		...getPatientByIdQuery,
	};
};

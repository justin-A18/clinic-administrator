'use client';

import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { getAllPatientsUseCase } from "@/core/use-cases/patients";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPatientsQuery = () => {

	const { token } = authStore();

	const getAllPatientsQuery = useQuery({
		queryKey: ['patients', token],
		queryFn: () => {
			return getAllPatientsUseCase(apiFetcher, token);
		},
	});

	return {
		...getAllPatientsQuery,
	};
};

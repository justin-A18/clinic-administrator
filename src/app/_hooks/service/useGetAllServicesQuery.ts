'use client';

import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { getAllServicesUseCase } from "@/core/use-cases/services";
import { useQuery } from "@tanstack/react-query";

export const useGetAllServicesQuery = () => {

	const { token } = authStore();

	const getAllServicesQuery = useQuery({
		queryKey: ['services', token],
		queryFn: () => {
			return getAllServicesUseCase(apiFetcher, token);
		},
	});

	return {
		...getAllServicesQuery,
	};
};

'use client';

import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { getAllPackagesUseCase } from "@/core/use-cases/packages";
import { useQuery } from "@tanstack/react-query";

export const useGetAllPackagesQuery = () => {

	const { token } = authStore();

	const getAllDoctorsQuery = useQuery({
		queryKey: ['packages', token],
		queryFn: () => {
			return getAllPackagesUseCase(apiFetcher, token);
		},
	});

	return {
		...getAllDoctorsQuery,
	};
};

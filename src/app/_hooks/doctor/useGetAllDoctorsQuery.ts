'use client';

import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { getAllDoctorsUseCase } from "@/core/use-cases/doctors";
import { useQuery } from "@tanstack/react-query";

export const useGetAllDoctorsQuery = () => {

	const { token } = authStore();

	const getAllDoctorsQuery = useQuery({
		queryKey: ['doctors', token],
		queryFn: () => {
			return getAllDoctorsUseCase(apiFetcher, token);
		},
	});

	return {
		...getAllDoctorsQuery,
	};
};

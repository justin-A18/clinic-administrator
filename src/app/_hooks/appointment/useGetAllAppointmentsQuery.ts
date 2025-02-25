'use client';

import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { getAllAppointmentUseCase } from "@/core/use-cases/appointment";
import { useQuery } from "@tanstack/react-query";

export const useGetAllAppointmentsQuery = () => {

	const { token } = authStore();

	const getAllAppointmentsQuery = useQuery({
		queryKey: ['appointments', token],
		queryFn: () => {
			return getAllAppointmentUseCase(apiFetcher, token);
		},
	});

	return {
		...getAllAppointmentsQuery,
	};
};

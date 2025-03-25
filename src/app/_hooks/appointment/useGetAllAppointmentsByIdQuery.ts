'use client';

import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { getAllAppointmentByIdUseCase } from "@/core/use-cases/appointment/get-all-appointment-by-id.use-case";
import { useQuery } from "@tanstack/react-query";

export const useGetAllAppointmentsByIdQuery = (id: string) => {

	const { token } = authStore();

	const getAllAppointmentsQuery = useQuery({
		queryKey: ['appointments', { token, id }],
		queryFn: () => {
			return getAllAppointmentByIdUseCase(apiFetcher, id, token);
		},
	});

	return {
		...getAllAppointmentsQuery,
	};
};

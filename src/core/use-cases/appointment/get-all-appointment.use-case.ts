import { HttpAdapter } from "@/config/adapters/http";
import { CitesResponse } from "@/infrastructure/interfaces/cites.interface";

export const getAllAppointmentUseCase = async (apiFetcher: HttpAdapter, token: string) => {
	const data = await apiFetcher.get<CitesResponse>('/appointments', token);
	return data;
};
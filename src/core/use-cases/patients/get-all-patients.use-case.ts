import { HttpAdapter } from "@/config/adapters/http";
import { PatientsResponse } from "@/infrastructure/interfaces/patients.interface";

export const getAllPatientsUseCase = async (apiFetcher: HttpAdapter, token: string) => {
	const data = await apiFetcher.get<PatientsResponse>('/patients', token);
	return data;
};
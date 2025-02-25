import { HttpAdapter } from "@/config/adapters/http";
import { DoctorsResponse } from "@/infrastructure/interfaces/doctor.interface";

export const getAllPackagesUseCase = async (apiFetcher: HttpAdapter, token: string) => {
	const data = await apiFetcher.get<DoctorsResponse>('/packages', token);
	return data;
};
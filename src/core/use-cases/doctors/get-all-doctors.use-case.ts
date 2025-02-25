import { HttpAdapter } from "@/config/adapters/http";
import { DoctorsResponse } from "@/infrastructure/interfaces/doctor.interface";

export const getAllDoctorsUseCase = async (apiFetcher: HttpAdapter, token: string) => {
	const data = await apiFetcher.get<DoctorsResponse>('/doctors', token);
	return data;
};
import { HttpAdapter } from "@/config/adapters/http";
import { ServicesResponse } from "@/infrastructure/interfaces/services.interface";

export const getAllServicesUseCase = async (apiFetcher: HttpAdapter, token: string) => {
	const data = await apiFetcher.get<ServicesResponse>('/services', token);
	return data;
};
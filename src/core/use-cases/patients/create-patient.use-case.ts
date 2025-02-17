import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const createPatientUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, token: string) => {
	const data = await apiFetcher.post<HttpResponse>('/patients', body, token);
	return data;
};
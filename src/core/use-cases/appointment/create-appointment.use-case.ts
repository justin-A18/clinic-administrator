import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const createAppointmentUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, token: string) => {
	const data = await apiFetcher.post<HttpResponse>('/appointments', body, token);
	return data;
};
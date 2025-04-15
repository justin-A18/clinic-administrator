import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const updateAppointmentUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, id: string, token: string) => {
	const data = await apiFetcher.put<HttpResponse>(`/appointments/${id}`, body, token);
	return data;
};
import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const deleteAppointmentUseCase = async (apiFetcher: HttpAdapter, id: number, token: string) => {
	const data = await apiFetcher.delete<HttpResponse>(`/appointments/${id}`, token);
	return data;
};
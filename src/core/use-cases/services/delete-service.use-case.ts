import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const deleteServicesUseCase = async (apiFetcher: HttpAdapter, id: string, token: string) => {
	const data = await apiFetcher.delete<HttpResponse>(`/services/${id}`, token);
	return data;
};
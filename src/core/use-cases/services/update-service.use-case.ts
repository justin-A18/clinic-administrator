import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const updateServiceUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, id: string, token: string) => {
	const data = await apiFetcher.put<HttpResponse>(`/services/${id}`, body, token);
	return data;
};
import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const updatePatientUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, id: string, token: string) => {
	const data = await apiFetcher.put<HttpResponse>(`/patients/${id}`, body, token);
	return data;
};
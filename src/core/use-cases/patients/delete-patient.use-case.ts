import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const deletePatientUseCase = async (apiFetcher: HttpAdapter, id: string, token: string) => {
	const data = await apiFetcher.delete<HttpResponse>(`/patients/${id}`, token);
	return data;
};
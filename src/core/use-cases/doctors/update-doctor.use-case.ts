import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const updateDoctorUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, id: string, token: string) => {
	const data = await apiFetcher.put<HttpResponse>(`/doctors/${id}`, body, token);
	return data;
};
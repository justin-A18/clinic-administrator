import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const deleteDoctorUseCase = async (apiFetcher: HttpAdapter, id: string, token: string) => {
	const data = await apiFetcher.delete<HttpResponse>(`/doctors/${id}`, token);
	return data;
};
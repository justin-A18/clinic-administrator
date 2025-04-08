import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const deletePackageUseCase = async (apiFetcher: HttpAdapter, id: number, token: string) => {
	const data = await apiFetcher.delete<HttpResponse>(`/packages/${id}`, token);
	return data;
};
import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const updatePackageUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, id: number, token: string) => {
	const data = await apiFetcher.put<HttpResponse>(`/packages/${id}`, body, token);
	return data;
};
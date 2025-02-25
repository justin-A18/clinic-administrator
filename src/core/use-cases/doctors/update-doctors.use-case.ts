import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";



export const updateDoctorstUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, id: number, token: string) => {
    
    const data = await apiFetcher.put<HttpResponse>(`/doctors/${id}`,body, token);
    return data;
};
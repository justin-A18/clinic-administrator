import { HttpAdapter } from "@/config/adapters/http";
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";



export const deleteDoctorstUseCase = async (apiFetcher: HttpAdapter, id: number, token: string) => {
    
    const data = await apiFetcher.delete<HttpResponse>(`/doctors/${id}`, token);
    return data;
};
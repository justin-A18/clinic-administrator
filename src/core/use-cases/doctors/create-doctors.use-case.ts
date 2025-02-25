import { HttpAdapter } from "@/config/adapters/http"
import { HttpResponse } from "@/infrastructure/interfaces/global.interface";
import { useMutation } from "@tanstack/react-query"

export const createDoctorsUseCase = async (apiFetcher: HttpAdapter, body: Record<string, unknown>, token: string) => {
    const data = await apiFetcher.post<HttpResponse>('/doctors', body, token);
    return data;
};
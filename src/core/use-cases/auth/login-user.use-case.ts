import { HttpAdapter } from "@/config/adapters/http";
import { LoginResponse } from "@/infrastructure/interfaces/auth.interface";
import { AuthMapper } from "@/infrastructure/mappers/auth.mapper";

export const loginUserUseCase = async (apiFetcher: HttpAdapter,	body: Record<string, unknown>) => {
	const data = await apiFetcher.post<LoginResponse>('/auth/login', body);
	return AuthMapper.toToken(data);
};

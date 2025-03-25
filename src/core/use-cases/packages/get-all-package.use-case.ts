import { HttpAdapter } from "@/config/adapters/http";
import { IPackagesEntity } from "@/core/entities/package.entity";

export const getAllPackagesUseCase = async (apiFetcher: HttpAdapter, token: string) => {
	const data = await apiFetcher.get<IPackagesEntity>('/packages', token);
	return data;
};
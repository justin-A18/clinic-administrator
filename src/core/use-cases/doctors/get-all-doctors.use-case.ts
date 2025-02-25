import { HttpAdapter } from "@/config/adapters/http";
import { DoctorEntity } from "@/core/entities";
import { DoctorsDataInterface, HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const getAllDoctorsUseCase = async (apiFetcher: HttpAdapter, token: string) => {
	const data = await apiFetcher.get<DoctorsDataInterface>('/doctors', token);
	return data;
};


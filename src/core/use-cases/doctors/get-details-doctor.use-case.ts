import { HttpAdapter } from "@/config/adapters/http";
import { DoctorEntity } from "@/core/entities";
import { DoctorsDataInterface, HttpResponse } from "@/infrastructure/interfaces/global.interface";

export const getDetailsDoctorUseCase = async (apiFetcher: HttpAdapter,id: number, token: string) => {
	const data = await apiFetcher.get<DoctorsDataInterface>(`/doctors/${id}`, token);
	return data;
};

import { HttpAdapter } from "@/config/adapters/http";
import { IAppointmentEntity } from "@/core/entities";
// import { CitesResponse } from "@/infrastructure/interfaces/cites.interface";

export const getAllAppointmentUseCase = async (apiFetcher: HttpAdapter, token: string) => {
	const data = await apiFetcher.get<IAppointmentEntity>('/appointments', token);
	return data;
};
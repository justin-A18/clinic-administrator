import { HttpAdapter } from "@/config/adapters/http";
import { IAppointmentEntity } from "@/core/entities";
// import { CitesResponse } from "@/infrastructure/interfaces/cites.interface";

export const getAllAppointmentByIdUseCase = async (apiFetcher: HttpAdapter, id: string, token: string) => {
	const data = await apiFetcher.get<IAppointmentEntity>(`/appointments/${id}`, token);
	return data;
};
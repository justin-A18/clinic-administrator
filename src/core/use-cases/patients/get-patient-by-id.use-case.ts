import { HttpAdapter } from "@/config/adapters/http";
import { PatientResponse } from "@/infrastructure/interfaces/patients.interface";

export const getPatientByIdUseCase = async (apiFetcher: HttpAdapter, id: string, token: string) => {
	const data = await apiFetcher.get<PatientResponse>(`/patients/${id}`, token);
	return data;
};
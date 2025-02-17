import { apiFetcher } from "@/config/adapters/api.adapter";
import { Doctors } from "@/core/entities";

export const DoctorsGetUseCase = async () => {
	const data = await apiFetcher.get('localhost:8080/api/v1/doctors');
	return data;
};

import { authStore } from "@/app/_providers/store";
import { apiFetcher } from "@/config/adapters/api.adapter";
import { Doctors } from "@/core/entities";

export const DoctorsGetUseCase = async () => {
	const { setToken } = authStore();
	// acá tiene que haber paso de parametros por el token?
	const data = await apiFetcher.get('/doctors');
	return data;
};

// export const DoctorsPostUseCase = async (newDoctor: Doctors) => {
// 	const data = await apiFetcher.post<Doctors>('/doctors', newDoctor);
// 	return data;
// };



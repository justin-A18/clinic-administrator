import { HttpResponse } from "./global.interface";
import { IDoctorEntity } from "@/core/entities/doctor.entity";

export interface DoctorsResponse extends Omit<HttpResponse, "data"> {
	data: IDoctorEntity[];
}

export interface DoctorResponse extends Omit<HttpResponse, "data"> {
	data: IDoctorEntity;
}


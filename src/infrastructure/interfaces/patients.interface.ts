import { PatientEntity } from "@/core/entities";
import { HttpResponse } from "./global.interface";

export interface PatientsResponse extends Omit<HttpResponse, "data"> {
	data: PatientEntity[];
}

export interface PatientResponse extends Omit<HttpResponse, "data"> {
	data: PatientEntity;
}


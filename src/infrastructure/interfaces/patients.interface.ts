import { IPatientEntity } from "@/core/entities";
import { HttpResponse } from "./global.interface";

export interface PatientsResponse extends Omit<HttpResponse, "data"> {
	data: IPatientEntity[];
}

export interface PatientResponse extends Omit<HttpResponse, "data"> {
	data: IPatientEntity;
}


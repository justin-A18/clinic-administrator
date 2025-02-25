import { IAppointmentEntity } from "@/core/entities";
import { HttpResponse } from "./global.interface";

export interface CitesResponse extends Omit<HttpResponse, "data"> {
	data: IAppointmentEntity[];
}

export interface CiteResponse extends Omit<HttpResponse, "data"> {
	data: IAppointmentEntity;
}


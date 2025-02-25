import { IServiceEntity } from "@/core/entities";
import { HttpResponse } from "./global.interface";

export interface ServicesResponse extends Omit<HttpResponse, "data"> {
	data: IServiceEntity[];
}

export interface ServiceResponse extends Omit<HttpResponse, "data"> {
	data: IServiceEntity;
}


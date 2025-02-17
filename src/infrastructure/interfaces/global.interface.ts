export interface ErrorResponse {
	error: string;
	status: number;
};

export interface HttpResponse {
	data: null;
	message: string;
	status: number;
}

export interface Service {
	id: number;
	name: string;
	description: string;
	price: number;
}
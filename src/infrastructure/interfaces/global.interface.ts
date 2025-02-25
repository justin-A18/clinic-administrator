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

export interface DoctorsDataInterface {
	data: DoctorsInterface[]
	message: string
	status: number
}



export interface DoctorsInterface {
	id: number
	name: string
	last_name: string
	dni: string
	birth_date: string
	email: string
	phone_number: string
	address: string
	especialty: string
	days: string
	start_time: string
	end_time: string
	salary: number
}

export interface handleActionsDoctor {
	handleDelDoctor: (id: number) => void 
	handleUpdateDoctor?: (id:number) => any 
	// handleDetailsDoctor: (id:number) => any 
}
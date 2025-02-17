export interface ErrorResponse {
	error: string;
	status: number;
};

export interface Service {
	id: number;
	name: string;
	description: string;
	price: number;
}

export interface DoctorsGetInterface {
	data: Doctors[]
	message: string
	status: number
  }
  


export interface Doctors {
	id: number | null
	name: string | void
	lastname: string | void
	dni?: number | null
	specialty: string
	phone_number?: number | null
	days: number | null
	birth_date: string | void
	email: string | void
	address: string | void
	start_time: string | void
	end_time: string | void
	salary: number | null
	options: boolean
}


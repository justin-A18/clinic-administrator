export interface Doctors{
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
	start_time: string,
	end_time: string,
	salary: number | null
	options: boolean
}
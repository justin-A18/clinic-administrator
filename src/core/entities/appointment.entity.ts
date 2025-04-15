export interface IAppointmentEntity {
	data: Apointment[] 
	message: string
	status: number
  }
  
  export interface Apointment {
	id: string
	doctor_id: number
	patient: Patient
	patient_dni: string
	service_id: number
	package_id: number
	date: string
	start_time: string
	end_time: string
	paid: boolean
	total_amount: number
  }
  
  export interface Patient {
	id: string
	name: string
	last_name: string
	dni: string
	birth_date: string
	email: string
	phone_number: string
	address: string
	health_insurance: boolean
  }
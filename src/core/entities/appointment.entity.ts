export interface IAppointmentEntity {
	id: string
	doctorId: string;
	patientDni: string;
	serviceId: string;
	date: string;
	startTime: string;
	endTime: string;
	paid: boolean;
}
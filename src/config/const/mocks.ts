import { Doctors, Service } from "@/infrastructure/interfaces/global.interface";

export const services: Service[] = [
	{
		id: 1,
		name: "Consulta General",
		description: "Consulta médica general con un especialista en medicina familiar.",
		price: 50.00

	},
	{
		id: 2,
		name: "Consulta Cardiológica",
		description: "Evaluación cardiológica completa con electrocardiograma.",
		price: 120.00
	},
	{
		id: 3,
		name: "Ecografía Abdominal",
		description: "Ecografía para evaluar órganos abdominales como hígado, riñones y páncreas.",
		price: 90.00
	},
	{
		id: 4,
		name: "Radiografía de Tórax",
		description: "Radiografía para evaluar el estado de los pulmones y el corazón.",
		price: 75.00
	},
	{
		id: 5,
		name: "Análisis de Sangre",
		description: "Análisis completo de sangre para evaluar niveles de glucosa, colesterol, etc.",
		price: 60.00
	},
	{
		id: 6,
		name: "Terapia Física",
		description: "Sesión de terapia física para rehabilitación muscular y articular.",
		price: 45.00
	},
	{
		id: 7,
		name: "Consulta Dermatológica",
		description: "Evaluación y tratamiento de afecciones de la piel.",
		price: 80.00
	},
	{
		id: 8,
		name: "Endoscopia Digestiva",
		description: "Procedimiento para examinar el tracto digestivo superior.",
		price: 200.00
	},
	{
		id: 9,
		name: "Consulta Psicológica",
		description: "Sesión de terapia psicológica para apoyo emocional y mental.",
		price: 55.00
	},
	{
		id: 10,
		name: "Vacunación",
		description: "Aplicación de vacunas según el esquema de vacunación.",
		price: 30.00
	},
	{
		id: 11,
		name: "Fisioterapia",
		description: "Sesión de terapia física para rehabilitación y alivio del dolor.",
		price: 45.00
	},
	{
		id: 12,
		name: "Odontología",
		description: "Consulta y tratamiento dental para salud bucal.",
		price: 60.00
	}
];

export const doctors: Doctors[] = [
	{
		id: 0,
		name: "Ramon",
		lastname: "",
		dni: 7676575,
		specialty: "Neuro Cirujano",
		phone_number: null,
		days: 6,
		birth_date: "",
		email: "",
		address: "",
		start_time: "7:30",
		end_time: "21:30",
		salary: 500,
		options: true
	},
	{
		id: 1,
		name: "Ramon",
		lastname: "",
		dni: null,
		specialty: "Neuro Cirujano",
		phone_number: 87657,
		days: 5,
		birth_date: "",
		email: "",
		address: "",
		start_time: "7:30",
		end_time: "21:30",
		salary: 500,
		options: true
	},
	{
		id: 2,
		name: "Ramon",
		lastname: "Gonsalez",
		dni: null,
		specialty: "Neuro Cirujano",
		phone_number: 43254,
		days: 5,
		birth_date: "",
		email: "",
		address: "",
		start_time: "7:30",
		end_time: "21:30",
		salary: 500,
		options: true
	},
	{
		id: 3,
		name: "Ramon",
		lastname: "Gonsalez",
		dni: 9789765,
		specialty: "Neuro Cirujano",
		phone_number: null,
		days: 5,
		birth_date: "",
		email: "",
		address: "",
		start_time: "7:30",
		end_time: "21:30",
		salary: 500,
		options: true
	},
	{
		id: 4,
		name: "Ramon",
		lastname: "Gonsalez",
		dni: 76756765,
		specialty: "Neuro Cirujano",
		phone_number: 435435,
		days: 5,
		birth_date: "",
		email: "",
		address: "",
		start_time: "7:30",
		end_time: "21:30",
		salary: 500,
		options: true
	},
	{
		id: 5,
		name: "Ramon",
		lastname: "Gonsalez",
		dni: null,
		specialty: "Neuro Cirujano",
		phone_number: 45654645,
		days: 5,
		birth_date: "",
		email: "",
		address: "",
		start_time: "7:30",
		end_time: "21:30",
		salary: 500,
		options: true
	},
	{
		id: 6,
		name: "Ramon",
		lastname: "Gonsalez",
		dni: 24344535,
		specialty: "Neuro Cirujano",
		phone_number: 435435,
		days: 5,
		birth_date: "23-6-1960",
		email: "",
		address: "",
		start_time: "7:30",
		end_time: "21:30",
		salary: 500,
		options: true
	},
	{
		id: 7,
		name: "Ramon",
		lastname: "Gonsalez",
		dni: null,
		specialty: "Neuro Cirujano",
		phone_number: 7866565,
		days: 5,
		birth_date: "15-5-1980",
		email: "",
		address: "",
		start_time: "7:30",
		end_time: "21:30",
		salary: 500,
		options: true
	},
	{
		id: 8,
		name: "",
		lastname: "",
		dni: null,
		specialty: "Neuro Cirujano",
		phone_number: null,
		days: 5,
		birth_date: "",
		email: "",
		address: "",
		start_time: "7:30",
		end_time: "21:30",
		salary: 500,
		options: true
	}
]
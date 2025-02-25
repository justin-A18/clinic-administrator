import { z } from "zod";

export const DoctorSchema = z.object({
	name: z.string().min(1, { message: "El nombre es obligatorio." }),
	last_name: z.string().min(1, { message: "El apellido es obligatorio." }),
	dni: z.string().min(8, { message: "El DNI debe tener al menos 8 caracteres." }),
	phone_number: z.string().min(9, { message: "El número de teléfono debe tener al menos 9 dígitos." }),
	especialty: z.string().min(1, { message: "La especialidad es obligatoria." }),
	days: z.string().min(1, { message: "Debe indicar los días de trabajo." }),
	birth_date: z.string().min(1, { message: "La fecha de nacimiento es obligatoria." }), // Podrías validarlo con z.date() si usas objetos Date.
	email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
	address: z.string().min(1, { message: "La dirección es obligatoria." }),
	start_time: z.string().min(1, { message: "Debe indicar la hora de inicio." }),
	end_time: z.string().min(1, { message: "Debe indicar la hora de finalización." }),
	salary: z.number().min(1, { message: "Debe indicar el salario." }), // Si es numérico, podrías usar z.number().
});

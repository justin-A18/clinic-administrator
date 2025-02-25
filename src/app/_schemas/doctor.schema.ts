import { format, isValid, parse } from "date-fns";
import { z } from "zod";

const optionSchema = z.object({
	label: z.string(),
	value: z.string(),
	disable: z.boolean().optional(),
});


export const doctorSchema = z.object({
	name: z.string().min(1, { message: "El nombre es obligatorio." }),
	last_name: z.string().min(1, { message: "El apellido es obligatorio." }),
	dni: z.string().regex(/^\d{8}$/, { message: "El DNI debe contener exactamente 8 dígitos numéricos." }),
	birth_date: z
		.preprocess(
			value => {
				if (value instanceof Date && isValid(value)) return value;
				if (typeof value === "string") {
					const parsed = parse(value, "yyyy-MM-dd", new Date());
					return isValid(parsed) ? parsed : null;
				}
				return null;
			},
			z.date({ message: "La fecha de nacimiento debe ser una fecha válida." })
		)
		.transform(date => format(date, "yyyy-MM-dd")),
	email: z.string().email({ message: "Ingrese un correo electrónico válido." }),
	phone_number: z.string().regex(/^\+\d{1,3}\d{9}$/, { message: "El teléfono debe incluir el código de país seguido de 9 dígitos." }),
	address: z.string().min(1, { message: "La dirección es obligatoria." }),
	especialty: z.string().min(1, { message: "La especialidad es obligatoria." }),
	days: z.array(optionSchema).min(1, { message: "Los días de trabajo son obligatorios." }),
	start_time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, { message: "La hora de inicio debe estar en formato HH:mm." }),
	end_time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, { message: "La hora de finalización debe estar en formato HH:mm." }),
	salary: z.coerce
		.number()
		.nonnegative("El precio no puede ser negativo")
		.transform(value => Number(value.toFixed(2)))
});

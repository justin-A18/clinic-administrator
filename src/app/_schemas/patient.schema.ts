import { format, isValid, parse } from "date-fns";
import { z } from "zod";

export const patientSchema = z.object({
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
	health_insurance: z.boolean({ message: "El seguro de salud debe ser verdadero o falso." }),
});

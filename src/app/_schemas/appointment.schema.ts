import { format, isValid, parse } from "date-fns";
import { z } from "zod";

const AppointmentSchema = z.object({
    patient_dni: z.string().regex(/^\d{8}$/, { message: "El DNI debe contener exactamente 8 dígitos numéricos." }),
    service_id: z.number(),
    doctor_id: z.number(),
    package_id: z.number(),
    date: z
        .preprocess(
            (value) => {
                if (value instanceof Date && isValid(value)) return value;
                if (typeof value === "string") {
                    const parsed = parse(value, "yyyy-MM-dd", new Date());
                    return isValid(parsed) ? parsed : null;
                }
                return null;
            },
            z.date({ message: "La fecha debe ser válida." })
        )
        .transform((date) => format(date, "yyyy-MM-dd")),
    start_time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, { message: "La hora de inicio debe estar en formato HH:mm." }),
    end_time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, { message: "La hora de finalización debe estar en formato HH:mm." }),
    paid: z.boolean(),
    total_amount: z.coerce
		.number()
		.nonnegative("El precio no puede ser negativo")
		.transform(value => Number(value.toFixed(2)))
});

export { AppointmentSchema };
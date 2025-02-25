import { z } from "zod";

export const serviceSchema = z.object({
	name: z.string().min(1, "El nombre es obligatorio"),
	description: z.string().min(1, "La descripción es obligatoria"),
	price: z.coerce
		.number()
		.nonnegative("El precio no puede ser negativo")
		.transform(value => Number(value.toFixed(2)))
});
import { z } from "zod";

// export const ServiceSchema = z.object({
//     id: z.number(),
//     name: z.string(),
//     description: z.string(),
//   });

const optionSchema = z.object({
  label: z.string(),
  value: z.number(),
  disable: z.boolean().optional(),
});

export const PackageSchema = z.object({
  name: z.string().min(1, { message: "El nombre de paquete es obligatorio." }),
  service_ids: z.array(optionSchema).min(1, { message: "Debe haber al menos un servicio" }),
});

import { z } from "zod";

// export const ServiceSchema = z.object({
//     id: z.number(),
//     name: z.string(),
//     description: z.string(),
//     price: z.number()
//   });
  
  export const PackageSchema = z.object({
    
    name: z.string(),
    service_ids: z.number(),
  });
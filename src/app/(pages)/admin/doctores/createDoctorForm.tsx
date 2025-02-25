import { useDoctorsCreateMutation } from "@/app/_hooks/doctors/useCreateDoctorsMutation";
import { DoctorsInterface } from "@/infrastructure/interfaces/global.interface";
import React from "react";
import { useForm } from "react-hook-form";

export const CreateDoctorForm = ({ modal, Setmodal }: { modal: any, Setmodal: any }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            last_name: "",
            dni: "",
            birth_date: "",
            email: "",
            phone_number: "",
            address: "",
            especialty: "",
            days: "",
            start_time: "",
            end_time: "",
            salary: 0,
        },
    });

    const { DoctorsCreateMutation } = useDoctorsCreateMutation()
    const onSubmit = (data: Record<string, unknown>) => {
        console.log(data);
        DoctorsCreateMutation.mutate(data)
        Setmodal(!modal)
    };

    return (
        <div className="fixed inset-0 bg-[#4f4f4fd9]  flex justify-center mx-auto items-center z-50   ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[600px] ">
                <h2 className="text-xl font-bold mb-4 ">Editar Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 ">
                    <input {...register("name")}
                        className={`w-full p-2 border rounded ${errors?.name && "placeholder:text-red-500"}`}
                        placeholder={` ${errors?.name ? "escribe un nombre" : "nombre"}`} />
                    <input {...register("last_name")}
                        className={`w-full p-2 border rounded ${errors?.last_name && "placeholder:text-red-500"}`}
                        placeholder={` ${errors?.last_name ? "escribe un apellido" : "apellido"}`} />
                    <input {...register("dni")}
                        className={`w-full p-2 border rounded ${errors?.dni && "placeholder:text-red-500"}`}
                        placeholder={` ${errors?.dni ? "escribe un dni" : "dni"}`} />
                    <input type="date" {...register("birth_date")}
                        className={`w-full p-2 border rounded ${errors?.birth_date && "placeholder:text-red-500"}`} />
                    <input type="email" {...register("email")}
                        className={`w-full p-2 border rounded ${errors?.email && "placeholder:text-red-500"}`}
                        placeholder={` ${errors?.email ? "escribe un email" : "email"}`} />
                    <input {...register("phone_number")}
                        className={`w-full p-2 border rounded ${errors?.phone_number && "placeholder:text-red-500"}`}
                        placeholder={` ${errors?.phone_number ? "escribe un telefono" : "telefono"}`} />
                    <input {...register("address")}
                        className={`w-full p-2 border rounded ${errors?.address && "placeholder:text-red-500"}`}
                        placeholder={` ${errors?.address ? "escribe una direccion" : "direccion"}`} />
                    <input {...register("especialty")}
                        className={`w-full p-2 border rounded ${errors?.especialty && "placeholder:text-red-500"}`}
                        placeholder={` ${errors?.especialty ? "escribe una profesion" : "profesion"}`} />
                    <input {...register("days")}
                        className={`w-full p-2 border rounded ${errors?.days && "placeholder:text-red-500"}`}
                        placeholder={` ${errors?.days ? "escribe los dias desponibles" : "dias desp"}`} />
                    <input type="time" {...register("start_time")}
                        className={`w-full p-2 border rounded  ${errors?.start_time && "placeholder:text-red-500"}`} />
                    <input type="time" {...register("end_time")}
                        className={`w-full p-2 border rounded placeholder:text-red-500`} />
                    <input type="number" {...register("salary", { valueAsNumber: true })}
                        className={`w-full p-2 border rounded ${errors?.salary && "placeholder:text-red-500"}`}
                        placeholder={` ${errors?.salary ? "escribe un salario" : "salario"}`} />
                    <div className="flex justify-end space-x-2">
                        <button type="button" className="px-4 py-2 bg-gray-300 rounded" onClick={() => Setmodal(!modal)}>Cancelar</button>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


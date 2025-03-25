import React, { useEffect } from 'react'
import {
    DialogTitle,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Switch
} from '../ui'
import { ConvertHelper } from '@/config/helpers'
import { useCreateAppointmentMutation, useUpdateAppointmentMutation } from '@/app/_hooks/appointment';
import { useModalStore } from '@/app/_providers/store';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppointmentSchema } from '@/app/_schemas/appointment.schema';
import { z } from 'zod';
import { LoadingButton } from '../shared/button';
import { useGetAllDoctorsQuery } from '@/app/_hooks/doctor';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { useGetAllPatientsQuery } from '@/app/_hooks/patient';
import { useGetAllPackagesQuery } from '@/app/_hooks/package';
import { useGetAllServicesQuery } from '@/app/_hooks/service';

const AppointmentsForm = () => {

    const form = useForm<z.infer<typeof AppointmentSchema>>({
        resolver: zodResolver(AppointmentSchema),
    });

    const { data, type, entityType } = useModalStore();

    const { data: dataDoctors, isLoading } = useGetAllDoctorsQuery()
    const { data: dataPatients, isLoading: loadPatient } = useGetAllPatientsQuery()
    const { mutate: mutatePostAppointment } = useCreateAppointmentMutation()
    const { mutate: mutatePutAppointment } = useUpdateAppointmentMutation()
    const { data: dataServices, isLoading: loadServices } = useGetAllServicesQuery()
    const { data: dataPack, isLoading: loadPack } = useGetAllPackagesQuery()


    useEffect(() => {
        if (data) {
            console.log(data)
            form.reset(data);
        }
    }, [data]);

    const onSubmit = (values: z.infer<typeof AppointmentSchema>) => {

        if (type === 'editar') {
            console.log("Data para editar")
            console.log(data)
            mutatePutAppointment({
                body: values,
                id: (data as Apointment).id,
            });
            
            return;
        }
        console.log(values)
        console.log("creado")
        mutatePostAppointment(values);
    };


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-5 w-full bg-white p-4 rounded-md'>
                <DialogTitle className='text-2xl'>
                    {ConvertHelper.toCapitalCase(`${type} ${entityType}`)}
                </DialogTitle>
                <FormField
                    control={form.control}
                    name='doctor_id'
                    render={({ field }) => (
                        <FormItem className='flex-1'>
                            <FormLabel className='font-medium'>Selecciona el doctor</FormLabel>
                            <FormControl className='cursor-pointer'>
                                <Select onValueChange={(value) => field.onChange(Number(value))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={isLoading ? 'Cargando...' : 'Selecciona un doctor'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {isLoading ? (
                                            <SelectItem disabled value='error'>Error al cargar</SelectItem>
                                        ) : (
                                            dataDoctors?.data?.map((doctor) => (
                                                <SelectItem key={doctor.id} value={doctor.id.toString()}>
                                                    {doctor.name} {doctor.last_name} (dias disp: {doctor.days})
                                                    (horario disp: {doctor.start_time} a {doctor.end_time})
                                                </SelectItem>
                                            ))
                                        )}
                                    </SelectContent>
                                </Select>

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='service_id'
                    render={({ field }) => (
                        <FormItem className='flex-1'>
                            <FormLabel className='font-medium'>Selecciona el servicio</FormLabel>
                            <FormControl className='cursor-pointer'>
                                <Select onValueChange={(e) => field.onChange(Number(e))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={isLoading ? 'Cargando...' : 'Selecciona un doctor'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {loadServices ? (
                                            <SelectItem disabled value='error'>Error al cargar</SelectItem>
                                        ) : (
                                            dataServices?.data?.map((serv) => (
                                                <SelectItem key={serv.id} value={serv.id.toString()}>
                                                    {serv.name}
                                                </SelectItem>
                                            ))
                                        )}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="patient_dni"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel className="font-medium">Selecciona el paciente</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={(value) => field.onChange(value)} // Captura el DNI seleccionado
                                    value={field.value || ""}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona un paciente" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {dataPatients?.data.map((patient) => (
                                            <SelectItem key={patient.id} value={patient.dni}>
                                                {patient.name} {patient.last_name} (dni: {patient.dni})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='package_id'
                    render={({ field }) => (
                        <FormItem className='flex-1'>
                            <FormLabel className='font-medium'>Selecciona un paquete</FormLabel>
                            <FormControl className='cursor-pointer'>
                                <Select onValueChange={(e) => field.onChange(Number(e))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={loadPatient ? 'Cargando...' : 'Selecciona un paquete'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {loadPack ? (
                                            <SelectItem disabled value='error'>Error al cargar</SelectItem>
                                        ) : (
                                            dataPack?.data?.map((e) => (
                                                <SelectItem key={e.id} value={e.id.toString()}>
                                                    {e.name}
                                                </SelectItem>
                                            ))
                                        )}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex w-full md:items-center flex-col md:flex-row gap-5 md:justify-between'>
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fecha Cita</FormLabel>
                                <FormControl>
                                    <Input type='date' placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Fecha Cita
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className='flex md:items-center flex-col md:flex-row gap-5 md:justify-between w-full'>
                    <FormField
                        control={form.control}
                        name='start_time'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel className='font-medium'>Hora de inicio</FormLabel>
                                <FormControl>
                                    <Input
                                        type='time'
                                        className='text-sm'
                                        placeholder='9:00'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='end_time'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel className='font-medium'>Hora de salida</FormLabel>
                                <FormControl>
                                    <Input
                                        type='time'
                                        className='text-sm'
                                        placeholder='12:00'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name='paid'
                    render={({ field }) => (
                        <FormItem className='flex items-center justify-between p-3 w-full border rounded-md'>
                            <div className='space-y-0.5'>
                                <FormLabel className='text-sm'>
                                    Pagar seguro
                                </FormLabel>
                                <FormDescription className=' w-full'>
                                    Tener seguro permite acceder a descuentos en consultas,
                                    atención médica prioritaria y más beneficios.
                                </FormDescription>
                            </div>
                            <FormControl>
                                <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='total_amount'
                    render={({ field }) => (
                        <FormItem className='flex-1'>
                            <FormLabel className='font-medium'>Monto total</FormLabel>
                            <FormControl>
                                <Input
                                    className='text-sm'
                                    placeholder='500.00'
                                    type='number'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <LoadingButton
                    type='submit'
                    isLoading={false}>
                    {ConvertHelper.toCapitalCase(`${type} ${entityType}`)}
                </LoadingButton>
            </form>
        </Form>
    )
}
export default AppointmentsForm
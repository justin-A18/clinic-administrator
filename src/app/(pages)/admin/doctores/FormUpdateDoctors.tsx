import { LoadingButton } from '@/app/_components/shared/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/app/_components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/app/_components/ui/form';
import { Input } from '@/app/_components/ui/input';
import { useDoctorsCreateMutation } from '@/app/_hooks/doctors/useCreateDoctorsMutation';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { DoctorSchema } from "../../../_schemas/doctor.schema"
import { z } from 'zod';

export const FormUpdateDoctors = (
    { edit, Setedit }: { edit: any, Setedit: any }
) => {

    type Schema = z.infer<typeof DoctorSchema>


    const form = useForm<z.infer<typeof DoctorSchema>>({
        resolver: zodResolver(DoctorSchema),
        defaultValues: {
            name: '',
            last_name: '',
            dni: '',
            especialty: '',
            days: '',
            birth_date: '',
            email: '',
            phone_number: '',
            address: '',
            start_time: '',
            end_time: '',
            salary: 0,
        },
    });
    // const { register, handleSubmit } = useForm<Schema>({
    //     resolver: zodResolver(DoctorSchema),
    // })
    const { DoctorsCreateMutation } = useDoctorsCreateMutation()

    const onSubmit = (data: Record<string, unknown>) => {
        DoctorsCreateMutation.mutate(data)
        console.log(data)
    }
    return (
        <Dialog defaultOpen={true} 	 >
            <DialogContent aria-description="" >
                <DialogHeader className='p-4'>
                    <DialogTitle></DialogTitle>
                    <DialogDescription aria-describedby={undefined}>Crear Doctor</DialogDescription>
                </DialogHeader>
                <Form {...form} >
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className=' grid grid-cols-4  gap-[3rem]'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>nombre</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='text'
                                            className='text-sm'
                                            placeholder='nombre'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='last_name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>apellido</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='apellido'
                                            type='text'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='dni'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>dni</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='dni'
                                            type='number'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='especialty'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>profesion</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='profesion'
                                            type='text'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='days'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>dias disp</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='dias disp'
                                            type='text'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='birth_date'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>fecha nacimiento</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='fecha nacimiento'
                                            type='date'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='address'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>direccion</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='direccion'
                                            type='text'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='email'
                                            type='email'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='phone_number'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>telefono</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='telefono'
                                            type='tel'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='start_time'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>inicio dia</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='inicio dia'
                                            type='time'
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
                                <FormItem>
                                    <FormLabel className='font-medium'>cierre dia</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='cierre dia'
                                            type='time'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='salary'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-medium'>salario</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='text-sm'
                                            placeholder='salario'
                                            type='number'
                                            {...field} defaultValue={field.value || 0}
                                            onChange={(e) => {
                                                const value = e.target.value === "" ? 0 : Number(e.target.value);  // Convierte a número
                                                field.onChange(value);  // Actualiza el valor
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <LoadingButton
                            type='submit'
                            isLoading={DoctorsCreateMutation.isPending}>
                            Insertar Doctor
                        </LoadingButton>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

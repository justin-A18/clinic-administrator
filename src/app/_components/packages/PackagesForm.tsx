import { useCreatePackageMutation, useUpdatePackageMutation } from '@/app/_hooks/package';
import { useModalStore } from '@/app/_providers/store';
import { PackageSchema } from '@/app/_schemas/packages.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { LoadingButton } from '../shared/button';
import { ConvertHelper } from '@/config/helpers';
import { DialogTitle, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '../ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { useGetAllServicesQuery } from '@/app/_hooks/service';

const PackagesForm = () => {
    const { data, type, entityType } = useModalStore();
    const form = useForm<z.infer<typeof PackageSchema>>({
        resolver: zodResolver(PackageSchema),

    });

    const createMutatePack = useCreatePackageMutation();
    const { data: dataServices, isLoading } = useGetAllServicesQuery()
    const { mutate: mutateEditPack } = useUpdatePackageMutation()

    useEffect(() => {
        if (data) {
            console.log(data)
            form.reset(data);
        }
    }, [data]);
    
    console.log("data seleccionada del edit")
    console.log(data)
    const onSubmit = (values: z.infer<typeof PackageSchema>) => {

        if (type === 'editar' && data) {

            const DataPack = {
                ...values,
                service_ids: [data.service_ids]
            }
            // mutateEditPack(DataPack);
            console.log("data editada");
            // console.log(DataPack);
            return;
        }
        const DataPack = {
            ...values,
            service_ids: [values.service_ids]
        }
        createMutatePack.mutate(DataPack);
        // console.log(values)
    };


    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-5 w-full bg-white p-4 rounded-md'>
                <DialogTitle className='text-2xl'>
                    {ConvertHelper.toCapitalCase(`${type} ${entityType}`)}
                </DialogTitle>

                <div className='flex flex-col md:items-center md:flex-row gap-5 md:justify-between'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem className='flex-1'>
                                <FormLabel className='font-medium'>Nombre de paquete</FormLabel>
                                <FormControl>
                                    <Input
                                        className='text-sm'
                                        placeholder='Jonh'
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
                        name='service_ids'
                        render={({ field }) => (
                            <FormItem className='flex-1'>
                                <FormLabel className='font-medium'>Selecciona el servicio</FormLabel>
                                <FormControl className='cursor-pointer'>
                                    <Select onValueChange={(e) => field.onChange(Number(e))}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={isLoading ? 'Cargando...' : 'Selecciona un servicio'} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {isLoading ? (
                                                <SelectItem disabled value='error'>Cargando Servicio</SelectItem>
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
                </div>

                <LoadingButton
                    type='submit'
                    isLoading={false}>
                    {ConvertHelper.toCapitalCase(`${type} ${entityType}`)}
                </LoadingButton>
            </form>
        </Form>
    )
}
export default PackagesForm
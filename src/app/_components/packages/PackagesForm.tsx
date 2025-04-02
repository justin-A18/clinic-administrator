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
import { useGetAllServicesQuery } from '@/app/_hooks/service';
import { Packages } from '@/core/entities/package.entity';
import MultipleSelector from '../shared/multiple-selector/MultipleSelector';
import { ApiMapper } from '@/config/adapters/mapper/ApiMapper.adapter';

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


    const onSubmit = (values: z.infer<typeof PackageSchema>) => {

        if (type === 'editar' && (data as Packages).id) {

            // const DataPackEdit = {
            //     name: values.name,
            //     service_ids: (data as Packages).services.map(e => ({ id: e.id })),
            //     id: (data as Packages).id
            // }
            // mutateEditPack(DataPackEdit);
            // console.log("data editada");
            // console.log(DataPackEdit);
            return;
        }
        // const DataPack = {
        //     name: values.name,
        //     service_ids: [values.service_ids]
        // }
        // createMutatePack.mutate(DataPack);
        console.log(values)
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
                        render={({ field }) => {
                            console.log("Data que devuelve el adapter mapper al abrir los formularios")
                            console.log(ApiMapper(dataServices?.data))
                            return (
                                <FormItem className='flex-1'>
                                    <FormLabel className='font-medium'>Servicios</FormLabel>
                                    <FormControl>
                                        <MultipleSelector
                                            defaultOptions={ApiMapper(isLoading ? []  : dataServices?.data)}
                                            placeholder='Selecciona los servicios'
                                            emptyIndicator={
                                                <p className='text-center text-lg leading-10 text-gray-600 dark:text-gray-400'>
                                                    No hay resultados
                                                </p>
                                            }
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />


                </div>

                <LoadingButton
                    type='submit'
                    isLoading={false}>
                    {ConvertHelper.toCapitalCase(`${type} ${entityType}`)}
                </LoadingButton>
            </form >
        </Form >
    )
}
export default PackagesForm
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { es } from 'date-fns/locale';
import { format } from 'date-fns';
import { z } from 'zod';
import { doctorSchema } from '@/app/_schemas';
import { cn } from '@/app/_lib/utils';
import { LoadingButton } from '../shared/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useModalStore } from '@/app/_providers/store';
import { useEffect } from 'react';
import { ConvertHelper } from '@/config/helpers';
import { IDoctorEntity } from '@/core/entities';
import { useCreateDoctorMutation, useUpdateDoctorMutation } from '@/app/_hooks/doctor';
import MultipleSelector from '../shared/multiple-selector/MultipleSelector';
import { Button, Calendar, DialogTitle, Input, Popover, PopoverContent, PopoverTrigger } from '../ui';
import { OPTIONS } from '@/config/const';

const DoctorsForm = () => {
	const { data, type, entityType } = useModalStore();

	const form = useForm<z.infer<typeof doctorSchema>>({
		resolver: zodResolver(doctorSchema),
	});

	console.log(data);

	const { mutateAsync: createMutateAsync } = useCreateDoctorMutation();
	const { mutateAsync: updateMutateAsync } = useUpdateDoctorMutation();

	const onSubmit = (values: z.infer<typeof doctorSchema>) => {

		const formattedValues = {
			...values, days: Array.isArray(values.days)
				? values.days.map((day) => day.value).join(',') : values.days
		};

		if (type === 'editar') {
			updateMutateAsync({
				body: formattedValues,
				id: (data as IDoctorEntity).id,
			});
			return;
		}

		createMutateAsync(formattedValues);
	};

	useEffect(() => {
		if (data) {
			form.reset({
				...data,
				days: (data as IDoctorEntity).days
					? (data as IDoctorEntity).days.split(',').map(
						(day) =>
							OPTIONS.find((option) => option.value === day) || {
								label: day,
								value: day.toLocaleLowerCase(),
							},
					)
					: [],
			});
		}
	}, [data, form]);

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
								<FormLabel className='font-medium'>Nombre</FormLabel>
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
						name='last_name'
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel className='font-medium'>Apellido</FormLabel>
								<FormControl>
									<Input
										className='text-sm'
										placeholder='Doe'
										type='text'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex w-full md:items-center flex-col md:flex-row gap-5 md:justify-between'>
					<FormField
						control={form.control}
						name='dni'
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel className='font-medium'>DNI</FormLabel>
								<FormControl>
									<Input
										className='text-sm'
										placeholder='12345678'
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
							<FormItem className='flex-1 flex flex-col gap-2'>
								<FormLabel className='font-medium'>
									Fecha de nacimiento
								</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={'outline'}
												size={'md'}
												className={cn(
													'w-full text-left font-normal rounded-md',
												)}>
												{field.value ? format(new Date(field.value), 'dd-MM-yyyy', { locale: es, }) : 'Seleccione una fecha'}
												<CalendarIcon className='ml-auto size-4 opacity-50' />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent
										align='end'
										className='bg-white flex items-center justify-center p-0'>
										<Calendar
											mode='single'
											selected={field.value ? new Date(field.value) : undefined}
											onSelect={field.onChange}
										/>
									</PopoverContent>
								</Popover>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex md:items-center flex-col md:flex-row gap-5 md:justify-between w-full'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem className='flex-1'>
								<FormLabel className='font-medium'>Correo</FormLabel>
								<FormControl>
									<Input
										type='email'
										className='text-sm'
										placeholder='example@gmail.com'
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
							<FormItem className='flex-1'>
								<FormLabel className='font-medium'>Teléfono</FormLabel>
								<FormControl>
									<Input
										type='text'
										className='text-sm'
										placeholder='+54123456789'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex md:items-center flex-col md:flex-row gap-5 md:justify-between w-full'>
					<FormField
						control={form.control}
						name='address'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormLabel className='font-medium'>Dirección</FormLabel>
								<FormControl>
									<Input
										type='text'
										className='text-sm'
										placeholder='Plaza de España 8, Zaragoza, España'
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
							<FormItem className='w-full'>
								<FormLabel className='font-medium'>Especialidad</FormLabel>
								<FormControl>
									<Input
										type='text'
										className='text-sm'
										placeholder='Odontologo'
										{...field}
									/>
								</FormControl>
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
					name='days'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormLabel className='font-medium'>Dias disponibles</FormLabel>
							<FormControl>
								<MultipleSelector
									defaultOptions={OPTIONS}
									placeholder='Seleciona los dias disponibles'
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
					)}
				/>

				<FormField
					control={form.control}
					name='salary'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormLabel className='font-medium'>Salario</FormLabel>
							<FormControl>
								<Input
									className='text-sm'
									placeholder='50.00'
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
	);
};

export default DoctorsForm;

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { es } from 'date-fns/locale';
import { format } from 'date-fns';
import { z } from 'zod';

import { patientSchema } from '@/app/_schemas';
import { cn } from '@/app/_lib/utils';

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { LoadingButton } from '../shared/button';
import { DialogTitle } from '../ui/dialog';
import { Calendar } from '../ui/calendar';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { Input } from '../ui/input';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { useModalStore } from '@/app/_providers/store';
import { useEffect } from 'react';
import { ConvertHelper } from '@/config/helpers';
import {
	useCreatePatientMutation,
	useUpdatePatientMutation,
} from '@/app/_hooks/patient';
import { PatientEntity } from '@/core/entities';

const PatientForm = () => {
	const { data, type } = useModalStore();

	const form = useForm<z.infer<typeof patientSchema>>({
		resolver: zodResolver(patientSchema),
		defaultValues: {
			health_insurance: false,
		},
	});

	const { mutateAsync: createMutateAsync } = useCreatePatientMutation();
	const { mutateAsync: updateMutateAsync } = useUpdatePatientMutation();

	const onSubmit = (values: z.infer<typeof patientSchema>) => {
		if (type === 'editar') {
			updateMutateAsync({ body: values, id: (data as PatientEntity).id });
			return;
		}

		createMutateAsync(values);
	};

	useEffect(() => {
		if (data) {
			form.reset(data);
		}
	}, [data]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-5 w-full bg-white p-4 rounded-md'>
				<DialogTitle className='text-2xl'>
					{ConvertHelper.toCapitalCase(type + ' Paciente')}
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
												{field.value
													? format(new Date(field.value), 'dd-MM-yyyy', {
															locale: es,
													  })
													: 'Seleccione una fecha'}
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

				<FormField
					control={form.control}
					name='address'
					render={({ field }) => (
						<FormItem>
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
					name='health_insurance'
					render={({ field }) => (
						<FormItem className='flex items-center justify-between p-3 w-full border rounded-md'>
							<div className='space-y-0.5'>
								<FormLabel className='text-sm'>
									¿El paciente cuenta con seguro médico?
								</FormLabel>
								<FormDescription className='sm:max-w-xl w-full'>
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

				<LoadingButton
					type='submit'
					isLoading={false}>
					{ConvertHelper.toCapitalCase(type + ' paciente')}
				</LoadingButton>
			</form>
		</Form>
	);
};

export default PatientForm;

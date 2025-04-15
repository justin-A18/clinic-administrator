import { useForm } from 'react-hook-form';
import { LoadingButton } from '../shared/button';
import { DialogTitle } from '../ui/dialog';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { serviceSchema } from '@/app/_schemas';
import { z } from 'zod';
import { Input } from '../ui/input';
import { ConvertHelper } from '@/config/helpers';
import { useModalStore } from '@/app/_providers/store';
import {
	useCreateServiceMutation,
	useUpdateServiceMutation,
} from '@/app/_hooks/service';
import { IServiceEntity } from '@/core/entities';
import { useEffect } from 'react';

const ServicesForm = () => {
	const { data, type, entityType } = useModalStore();

	const form = useForm<z.infer<typeof serviceSchema>>({
		resolver: zodResolver(serviceSchema),
	});

	console.log(form.getValues());

	const { mutateAsync: createMutateAsync } = useCreateServiceMutation();
	const { mutateAsync: updateMutateAsync } = useUpdateServiceMutation();

	const onSubmit = (values: z.infer<typeof serviceSchema>) => {
		if (type === 'editar') {
			updateMutateAsync({ body: values, id: (data as IServiceEntity).id });
			return;
		}

		createMutateAsync(values);
	};

	useEffect(() => {
		if (data) {
			form.reset(data);
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

				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormLabel className='font-medium'>Nombre</FormLabel>
							<FormControl>
								<Input
									className='text-sm'
									placeholder='Odontología'
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
					name='description'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormLabel className='font-medium'>Descripción</FormLabel>
							<FormControl>
								<Input
									className='text-sm'
									placeholder='Consulta y tratamiento dental para salud bucal.'
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
					name='price'
					render={({ field }) => (
						<FormItem className='flex-1'>
							<FormLabel className='font-medium'>Precio</FormLabel>
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

export default ServicesForm;

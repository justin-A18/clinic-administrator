'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { userSchema } from './_schemas';
import { z } from 'zod';

import { Button } from '@/app/_components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/_components/ui/form';
import { Input } from '@/app/_components/ui/input';
import { HeaderForm } from './_components/auth';
import { Footer } from './_components/shared/footer/Footer';

export default function Home() {
	const form = useForm<z.infer<typeof userSchema>>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof userSchema>) => {
		console.log(values);
	};

	return (
		<main className='bg-[#F3F3F3] w-full min-h-dvh flex items-center justify-center p-4'>
			<div className='w-[450px] z-20 bg-white p-4 md:p-8 rounded-lg shadow-lg relative space-y-5'>
				<HeaderForm />

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-5'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
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
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='font-medium'>Contraseña</FormLabel>
									<FormControl>
										<Input
											className='text-sm'
											placeholder='********'
											type='password'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type='submit'
							className='w-full h-12 rounded-md justify-center'>
							Iniciar sesión
						</Button>
					</form>
				</Form>
			</div>

			<Footer />
		</main>
	);
}

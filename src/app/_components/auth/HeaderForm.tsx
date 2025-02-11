import { TypographyH1, TypographyP } from '../shared/typography';

export const HeaderForm = () => {
	return (
		<header className='flex items-center flex-col gap-5'>
			<img
				className='absolute -z-10 -top-[4.6rem] left-1/2 transform -translate-x-1/2'
				src='/frame-form.png'
				alt='Logo'
			/>

			<img
				src='/logo-union.png'
				alt='Logo'
				className='z-20 mx-auto'
			/>

			<div className='text-center space-y-2'>
				<TypographyH1 className='font-medium'>Bienvenido de nuevo</TypographyH1>
				<TypographyP className='text-[#979797] text-sm'>
					Inicie sesión para gestionar la clínica
				</TypographyP>
			</div>
		</header>
	);
};

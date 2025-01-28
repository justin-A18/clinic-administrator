import React from 'react';
import { BurblePerson } from './BurblePerson';
import { contributors } from '@/config/const';
import { TypographyP } from '../typography/TypographyP';

export const Footer = () => {
	return (
		<footer className='fixed bottom-0 flex flex-col items-center p-4 gap-4'>
			<TypographyP className='text-gray-800 text-sm text-center'>
				Contribuido por nuestro increíble equipo <b>&quot;devs funados&quot;</b>{' '}
				- 2025
			</TypographyP>

			<div className='flex items-center'>
				{contributors.map((contributor) => (
					<BurblePerson
						key={contributor.username}
						{...contributor}
					/>
				))}
			</div>
		</footer>
	);
};

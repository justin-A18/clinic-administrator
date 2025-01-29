'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { buttonVariants } from '../../ui/button';
import { routesNav } from '@/config/const';

export const SideLinks = () => {
	const pathname = usePathname();

	return (
		<ul>
			{routesNav.map(({ icon, name, route }) => (
				<li key={name}>
					<Link
						href={route}
						className={buttonVariants({
							variant: 'link',
							class: `${
								pathname === route && 'bg-[#F0EFFF] border-[#6C63FF]'
							} w-full`,
						})}>
						{icon}
						<span className='text-sm'>{name}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};

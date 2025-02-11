'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '../../_components/shared/sidebar';
import { TypographyH1 } from '../../_components/shared/typography';
import { ConvertHelper } from '@/config/helpers';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	return (
		<div className='grid grid-cols-[300px_1fr]'>
			<Sidebar />

			<main className='w-full min-h-dvh'>
				<header className='w-full px-5 py-[1.14rem] border-b border-gray-200'>
					<TypographyH1 className='font-medium'>
						{ConvertHelper.toCapitalCase(pathname, 5)}
					</TypographyH1>
				</header>
				<section className='w-full min-h-[calc(100vh-70px)] bg-[#F2F3F7] p-5'>
					<div className='w-full h-full bg-white rounded-lg p-5'>
						{children}
					</div>
				</section>
			</main>
		</div>
	);
};

export default AdminLayout;

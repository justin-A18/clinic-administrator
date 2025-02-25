'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from '../_components/shared/sidebar';
import { TypographyH1 } from '../_components/shared/typography';
import { ConvertHelper } from '@/config/helpers';
import { Input } from '../_components/ui/input';
import { Label } from '../_components/ui/label';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '../_components/ui/dialog';

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

						<Dialog defaultOpen={false}>
							<DialogContent className='sm:max-w-[425px]'>
								<DialogHeader>
									<DialogTitle>Edit profile</DialogTitle>
								</DialogHeader>
								<div className='grid gap-4 py-4'>
									<div className='grid grid-cols-4 items-center gap-4'>
										<Label
											htmlFor='name'
											className='text-right'>
											Name
										</Label>
										<Input
											id='name'
											className='col-span-3'
										/>
									</div>
									<div className='grid grid-cols-4 items-center gap-4'>
										<Label
											htmlFor='username'
											className='text-right'>
											Username
										</Label>
										<Input
											id='username'
											className='col-span-3'
										/>
									</div>
								</div>
							</DialogContent>
						</Dialog>
					</div>
				</section>
			</main>
		</div>
	);
};

export default AdminLayout;

'use client';

import { getServicesColumns } from '@/app/_components/columns';
import { DataTable } from '@/app/_components/shared/data-table';
import { Pagination } from '@/app/_components/shared/pagination';
import { TableLoadingSkeleton } from '@/app/_components/shared/skeleton';
import { Button } from '@/app/_components/ui/button';
import {
	useDeleteServiceMutation,
	useGetAllServicesQuery,
} from '@/app/_hooks/service';
import { useModalStore } from '@/app/_providers/store';
import { CircleFadingPlus } from 'lucide-react';

const ServicesPage = () => {
	const { data, isLoading } = useGetAllServicesQuery();
	const { mutateAsync: deleteMutateSync } = useDeleteServiceMutation();

	const { openModal } = useModalStore();

	return (
		<div className='w-full h-full flex flex-col gap-4'>
			<div className='flex justify-end'>
				<Button
					className='rounded-md text-sm px-4 py-3 hover:bg-primary/90'
					onClick={() => openModal({ entityType: 'servicio', type: 'crear' })}>
					<CircleFadingPlus size={20} />
					Crear servicio
				</Button>
			</div>

			<div className='space-y-3'>
				{
					data &&
					<DataTable
						columns={getServicesColumns({
							handleDelete: deleteMutateSync,
							handleEdit: openModal,
							handleDetails: openModal
						})}
						data={data?.data}
					/>
				}
				{
					data === undefined  &&
					<DataTable
						columns={getServicesColumns({
							handleDelete: deleteMutateSync,
							handleEdit: openModal,
							handleDetails: openModal
						})}
						data={[]}
					/>
				}

				<Pagination
					length={data?.data.length || 0}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};

export default ServicesPage;

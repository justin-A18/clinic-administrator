'use client';

import { CircleFadingPlus } from 'lucide-react';
import { TableLoadingSkeleton } from '@/app/_components/shared/skeleton';
import { Pagination } from '@/app/_components/shared/pagination';
import { DataTable } from '@/app/_components/shared/data-table';
import { Button } from '@/app/_components/ui/button';
import { useModalStore } from '@/app/_providers/store/modal.store';
import { useDeletePackageMutation, useGetAllPackagesQuery } from '@/app/_hooks/package';
import { getPackagesColumns } from '@/app/_components/columns/packagesColumns';
import { CardInfo } from '@/app/_components/shared/card';
import { PackageIcon } from '@/app/_components/ui/package';

const PatiensPage = () => {
	const { data, isLoading } = useGetAllPackagesQuery();
	const deletePackage = useDeletePackageMutation();

	const { openModal } = useModalStore();

	return (
		<div className='w-full h-full flex flex-col gap-4'>
			<div className='grid grid-cols-3 gap-4'>
				{
					data?.data &&
					<CardInfo
					icon={<PackageIcon/>	}
						title='Paquetes Totales'
						value={data?.data.length}
					/>
				}
			</div>
			<div className='flex justify-end'>
				<Button
					className='rounded-md text-sm px-4 py-3 hover:bg-primary/90'
					onClick={() =>
						openModal({
							entityType: 'paquetes',
							type: 'crear',
						})
					}>
					<CircleFadingPlus size={20} />
					Crear Paquete
				</Button>
			</div>

			<div className='space-y-3'>
				{isLoading ? (
					<TableLoadingSkeleton />
				) : (
					<DataTable
						columns={getPackagesColumns({
							handleDelete: deletePackage.mutate,
							handleEdit: openModal,
						})}
						data={data!.data}
					/>
				)}

				<Pagination
					length={data?.data.length || 0}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};

export default PatiensPage;

'use client';

import { getDoctorsColumns } from '@/app/_components/columns/doctorsColumns';
import { DataTable } from '@/app/_components/shared/data-table';
import { Pagination } from '@/app/_components/shared/pagination';
import { TableLoadingSkeleton } from '@/app/_components/shared/skeleton';
import { Button } from '@/app/_components/ui/button';
import {
	useDeleteDoctorMutation,
	useGetAllDoctorsQuery,
} from '@/app/_hooks/doctor';
import { useModalStore } from '@/app/_providers/store';
import { CircleFadingPlus } from 'lucide-react';

const DoctorsPage = () => {
	const { data, isLoading } = useGetAllDoctorsQuery();
	const deletePatient = useDeleteDoctorMutation();

	const { openModal } = useModalStore();

	return (
		<div className='w-full h-full flex flex-col gap-4'>
			<div className='flex justify-end'>
				<Button
					className='rounded-md text-sm px-4 py-3 hover:bg-primary/90'
					onClick={() =>
						openModal({
							entityType: 'doctor',
							type: 'crear',
						})
					}>
					<CircleFadingPlus size={20} />
					Crear Doctor
				</Button>
			</div>

			<div className='space-y-3'>
				{isLoading ? (
					<TableLoadingSkeleton />
				) : (
					<DataTable
						columns={getDoctorsColumns({
							handleDelete: deletePatient.mutate,
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

export default DoctorsPage;

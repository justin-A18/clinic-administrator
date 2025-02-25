'use client';

import { CircleFadingPlus } from 'lucide-react';
import { TableLoadingSkeleton } from '@/app/_components/shared/skeleton';
import { Pagination } from '@/app/_components/shared/pagination';
import { DataTable } from '@/app/_components/shared/data-table';
import {
	useDeletePatientMutation,
	useGetAllPatientsQuery,
} from '@/app/_hooks/patient';
import { getPatientsColumns } from '@/app/_components/columns';
import { Button } from '@/app/_components/ui/button';
import { useModalStore } from '@/app/_providers/store/modal.store';

const PatiensPage = () => {
	const { data, isLoading } = useGetAllPatientsQuery();
	const deletePatient = useDeletePatientMutation();

	const { openModal } = useModalStore();

	return (
		<div className='w-full h-full flex flex-col gap-4'>
			<div className='flex justify-end'>
				<Button
					className='rounded-md text-sm px-4 py-3 hover:bg-primary/90'
					onClick={() =>
						openModal({
							entityType: 'paciente',
							type: 'crear',
						})
					}>
					<CircleFadingPlus size={20} />
					Crear Paciente
				</Button>
			</div>

			<div className='space-y-3'>
				{isLoading ? (
					<TableLoadingSkeleton />
				) : (
					<DataTable
						columns={getPatientsColumns({
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

export default PatiensPage;

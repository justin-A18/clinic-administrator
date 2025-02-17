'use client';

import { CircleFadingPlus } from 'lucide-react';
import { TableLoadingSkeleton } from '@/app/_components/shared/skeleton';
import { Pagination } from '@/app/_components/shared/pagination';
import { DataTable } from '@/app/_components/shared/data-table';
import { useGetAllPatientsQuery } from '@/app/_hooks/patient';
import { patientsColumns } from '@/app/_components/columns';
import { Button } from '@/app/_components/ui/button';

const PatiensPage = () => {
	const { data, isLoading } = useGetAllPatientsQuery();

	return (
		<div className='w-full h-full flex flex-col gap-4'>
			<div className='flex justify-end'>
				<Button className='rounded-md text-sm px-4 py-3 hover:bg-primary/90'>
					<CircleFadingPlus size={20} />
					Crear Paciente
				</Button>
			</div>

			<div className='space-y-3'>
				{isLoading ? (
					<TableLoadingSkeleton />
				) : (
					<DataTable
						columns={patientsColumns}
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

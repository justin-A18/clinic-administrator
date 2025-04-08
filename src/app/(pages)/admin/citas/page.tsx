'use client';
import { getAppointmentsColumns } from '@/app/_components/columns/appointmentColums';
import { CardInfo } from '@/app/_components/shared/card';
import { DataTable } from '@/app/_components/shared/data-table';
import { Pagination } from '@/app/_components/shared/pagination';
import { TableLoadingSkeleton } from '@/app/_components/shared/skeleton';
import { Button } from '@/app/_components/ui';
import { useDeleteAppointmentMutation, useGetAllAppointmentsQuery } from '@/app/_hooks/appointment';
// import { useGetAllAppointmentsByIdQuery } from '@/app/_hooks/appointment/useGetAllAppointmentsByIdQuery';
import { useModalStore } from '@/app/_providers/store';
import { Calendar, CircleFadingPlus } from 'lucide-react';
const CitesPage = () => {

	const { data, isLoading } = useGetAllAppointmentsQuery()
	// const { data: dataBy } = useGetAllAppointmentsByIdQuery()
	const mutationDeleteApointment = useDeleteAppointmentMutation()


	const { openModal } = useModalStore();
	return (
		<>
			<div className='grid grid-cols-3 gap-4'>
				{
					data?.data ?
						<CardInfo
							icon={<Calendar size={20} />}
							title='Citas Totales'
							value={data?.data.length}
						/>
						:
						<CardInfo
							icon={<Calendar size={20} />}
							title='Citas Totales'
							value={0}
						/>
				}
			</div>

			<div className='w-full h-full flex flex-col gap-4'>
				<div className='flex justify-end'>
					<Button
						className='rounded-md text-sm px-4 py-3 hover:bg-primary/90'
						onClick={() =>
							openModal({
								entityType: 'cita',
								type: 'crear',
							})
						}>
						<CircleFadingPlus size={20} />
						Crear Cita
					</Button>
				</div>

				<div className='space-y-3'>
				{
					isLoading &&
					<TableLoadingSkeleton />
				}


				{
					data?.data &&
					<DataTable
						columns={getAppointmentsColumns({
							handleDelete: mutationDeleteApointment,
							handleEdit: openModal,
						})}
						data={data!.data}
					/>
				}
				{
					data?.data === undefined &&
					<DataTable
						columns={getAppointmentsColumns({
							handleDelete: mutationDeleteApointment,
							handleEdit: openModal,
						})}
						data={[]}
					/>
				}

				<Pagination
					length={data?.data ? data?.data.length : 0}
					isLoading={isLoading}
				/>
				</div>
			</div>




		</>
	);
};

export default CitesPage;

'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CustomDropdown } from '../shared/dropdown-menu';
import { ActionsColumnsProps } from '@/infrastructure/interfaces/global.interface';
import { IAppointmentEntity } from '@/core/entities/appointment.entity';
import { FormatHelper } from '@/config/helpers';

export const getAppointmentsColumns = ({
	handleDelete: handleDeleteAppointment,
	handleEdit: handleEditAppointment,
}: ActionsColumnsProps): ColumnDef<IAppointmentEntity>[] => [
	{
		accessorKey: 'doctorId',
		header: 'ID Doctor',
	},
	{
		accessorKey: 'patientDni',
		header: 'DNI Paciente',
	},
	{
		accessorKey: 'serviceId',
		header: 'ID Servicio',
	},
	{
		accessorKey: 'date',
		header: 'Fecha',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return FormatHelper.date(value);
		},
	},
	{
		accessorKey: 'startTime',
		header: 'Hora Inicio',
		cell: ({ row }) => {
			const time = row.original.startTime;
			return FormatHelper.date(time);
		},
	},
	{
		accessorKey: 'endTime',
		header: 'Hora Fin',
		cell: ({ row }) => {
			const time = row.original.endTime;
			return FormatHelper.date(time);
		},
	},
	{
		accessorKey: 'paid',
		header: 'Pagado',
		cell: ({ getValue }) => {
			const value = getValue<boolean>();
			return value ? 'Cancelado' : 'Pendiente';
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const appointment = row.original;

			return (
				<CustomDropdown
					handleEdit={() =>
						handleEditAppointment({
							entityType: 'cita',
							type: 'editar',
							data: appointment,
						})
					}
					handleDelete={() => handleDeleteAppointment(appointment.id)}
				/>
			);
		},
	},
];

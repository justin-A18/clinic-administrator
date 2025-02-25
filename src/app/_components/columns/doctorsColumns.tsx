'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CustomDropdown } from '../shared/dropdown-menu';
import { ActionsColumnsProps } from '@/infrastructure/interfaces/global.interface';
import { IDoctorEntity } from '@/core/entities/doctor.entity';
import { FormatHelper } from '@/config/helpers';

export const getDoctorsColumns = ({
	handleDelete: handleDeleteDoctor,
	handleEdit: handleEditDoctor,
}: ActionsColumnsProps): ColumnDef<IDoctorEntity>[] => [
	{
		accessorKey: 'id',
		header: 'ID',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return `#${value}`;
		},
	},
	{
		accessorKey: 'name',
		header: 'Nombre',
	},
	{
		accessorKey: 'last_name',
		header: 'Apellido',
	},
	{
		accessorKey: 'email',
		header: 'Correo',
	},
	{
		accessorKey: 'dni',
		header: 'DNI',
	},
	{
		accessorKey: 'phone_number',
		header: 'Teléfono',
	},
	{
		accessorKey: 'especialty',
		header: 'Especialidad',
	},
	{
		accessorKey: 'days',
		header: 'Días Laborales',
	},
	{
		accessorKey: 'start_time',
		header: 'Hora Inicio',
		cell: ({ row }) => {
			const time = row.original.start_time;
			return FormatHelper.date(time);
		},
	},
	{
		accessorKey: 'end_time',
		header: 'Hora Fin',
		cell: ({ row }) => {
			const time = row.original.end_time;
			return FormatHelper.date(time);
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const doctor = row.original;

			return (
				<CustomDropdown
					handleEdit={() =>
						handleEditDoctor({
							entityType: 'doctor',
							type: 'editar',
							data: doctor,
						})
					}
					handleDelete={() => handleDeleteDoctor(doctor.id)}
				/>
			);
		},
	},
];

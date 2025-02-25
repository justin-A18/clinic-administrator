'use client';

import { IPatientEntity } from '@/core/entities';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '../ui/badge';
import { CustomDropdown } from '../shared/dropdown-menu';
import { ActionsColumnsProps } from '@/infrastructure/interfaces/global.interface';

export const getPatientsColumns = ({
	handleDelete: handleDeletePatient,
	handleEdit: handleEditPatient,
}: ActionsColumnsProps): ColumnDef<IPatientEntity>[] => [
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
		accessorKey: 'health_insurance',
		header: 'Estado',
		cell: ({ getValue }) => {
			const value = getValue<boolean>();
			return (
				<Badge variant={value ? 'success' : 'destructive'}>
					{value ? 'Asegurado' : 'No asegurado'}
				</Badge>
			);
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const patient = row.original;

			return (
				<CustomDropdown
					handleEdit={() =>
						handleEditPatient({
							entityType: 'paciente',
							type: 'editar',
							data: patient,
						})
					}
					handleDelete={() => handleDeletePatient(patient.id)}
				/>
			);
		},
	},
];

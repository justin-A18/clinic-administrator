'use client';

import { PatientEntity } from '@/core/entities';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '../ui/badge';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { ModalProps } from '@/app/_providers/store';

interface ActionsColumnsProps {
	handleDeletePatient: (id: string) => void;
	handleEditPatient: ({ entityType, type, data }: ModalProps) => void;
	handleViewPatient?: () => void;
}

export const getPatientsColumns = ({
	handleDeletePatient,
	handleEditPatient,
	handleViewPatient,
}: ActionsColumnsProps): ColumnDef<PatientEntity>[] => [
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
				<DropdownMenu>
					<DropdownMenuTrigger className='focus:outline-none'>
						<Ellipsis />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={handleViewPatient}>
							Ver detalles
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() =>
								handleEditPatient({
									entityType: 'paciente',
									type: 'editar',
									data: patient,
								})
							}>
							Editar datos
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => handleDeletePatient(patient.id)}>
							Eliminar
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

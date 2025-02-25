'use client';

import { FormatHelper } from '@/config/helpers';
import { IServiceEntity } from '@/core/entities';
import { ColumnDef } from '@tanstack/react-table';
import { CustomDropdown } from '../shared/dropdown-menu';
import { ActionsColumnsProps } from '@/infrastructure/interfaces/global.interface';

export const getServicesColumns = ({
	handleDelete,
	handleEdit,
}: ActionsColumnsProps): ColumnDef<IServiceEntity>[] => [
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
		accessorKey: 'description',
		header: 'Descripción',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return FormatHelper.toCutText(value);
		},
	},
	{
		accessorKey: 'price',
		header: 'Precio',
		cell: ({ getValue }) => {
			const value = getValue<number>();
			return FormatHelper.currency(value);
		},
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			const service = row.original;

			return (
				<CustomDropdown
					handleDelete={() => handleDelete(service.id)}
					handleEdit={() =>
						handleEdit({
							entityType: 'servicio',
							type: 'editar',
							data: service,
						})
					}
				/>
			);
		},
	},
];

'use client';

import { FormatHelper } from '@/config/helpers';
import { Service } from '@/infrastructure/interfaces/global.interface';
import { ColumnDef } from '@tanstack/react-table';

export const servicesColumns: ColumnDef<Service>[] = [
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
];

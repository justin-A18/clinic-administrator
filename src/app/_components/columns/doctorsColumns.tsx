'use client';
import { DoctorsInterface, handleActionsDoctor } from '@/infrastructure/interfaces/global.interface';
import { ColumnDef } from '@tanstack/react-table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { useGetDetailsByIdDoctorsQuery } from "../../_hooks/doctors/useGetDetailsByIdDoctorsQuery"

const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	return date.toLocaleString("es-EN", { timeZone: "UTC" });
};

export const doctorsColumns = ({ handleDelDoctor, handleUpdateDoctor }: handleActionsDoctor): ColumnDef<DoctorsInterface>[] => [
	{
		accessorKey: 'id',
		header: 'ID',
		cell: ({ getValue }) => {
			const value = getValue<number>();
			return `#${value}`;
		},
	},
	{
		accessorKey: 'name',
		header: 'Nombre',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<p className={` cursor-pointer ${value ? "text-[#000]  " : "text-red-400"} }`}>
					{value ? value : ""}
				</p>
			);
		},
	},
	{
		accessorKey: 'lastname',
		header: 'Apellido',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<p className={`cursor-pointer ${value ? "text-[#000]  " : "text-red-400"} }`}>
					{value ? value : ""}
				</p>
			);
		},
	},
	{
		accessorKey: 'dni',
		header: 'Dni',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<p className={`cursor-pointer ${value ? "text-[#000]  " : "text-red-400"} }`}>
					{value ? value : ""}
				</p>
			);
		},
	},
	{
		accessorKey: 'specialty',
		header: 'Profesion',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<p className={`cursor-pointer ${value ? "text-[#000]  " : "text-red-400"} }`}>
					{value ? value : ""}
				</p>
			);
		},
	},
	{
		accessorKey: 'days',
		header: 'Turnos disp',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return !value ? <p className='text-red-400'></p> : <p className='text-black'>{value} </p>;
		},
	},
	{
		accessorKey: 'birth_date',
		header: 'fecha de nac',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<p className={`cursor-pointer truncate  ${value ? "text-[#000]  " : "text-red-400"} }`}>
					{
						formatDate(value)
					}
				</p>
			);
		},
	},
	{
		accessorKey: 'email',
		header: 'Mail',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<p className={`cursor-pointer ${value ? "text-[#000]  " : "text-red-400"} }`}>
					{value ? value : ""}
				</p>
			);
		},
	},
	{
		accessorKey: 'phone_number',
		header: 'Tel',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return !value ? <p className='text-red-400'></p> : <p className='text-black'>{value} </p>;
		},
	},
	{
		accessorKey: 'address',
		header: 'Direccion',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<p className={`cursor-pointer truncate overflow-hidden text-ellipsis ${value ? "text-[#000]  " : "text-red-400"} }`}>
					{value ? value : ""}
				</p>
			);
		},
	},
	{
		accessorKey: 'start_time',
		header: 'Horario inicio',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<p className={`cursor-pointer ${value ? "text-[#000]  " : "text-red-400"} }`}>
					{value ? value : ""}
				</p>
			);
		},
	},
	{
		accessorKey: 'end_time',
		header: 'Horario cierre',
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<p className={`cursor-pointer ${value ? "text-[#000]  " : "text-red-400"} }`}>
					{value ? value : ""}
				</p>
			);
		},
	},
	{
		accessorKey: 'salary',
		header: 'Sueldo',
		cell: ({ getValue }) => {
			const value = getValue<number>();
			return (
				<p className={`cursor-pointer ${value ? "text-[#000]  " : "text-red-400"} }`}>
					${value ? value : ""}
				</p>
			);
		},
	},
	{
		accessorKey: 'actions',
		header: 'Acciones',
		cell: ({ row }) => {
			const { id } = row.original,
				{ original } = row

			return (
				<DropdownMenu>
					<DropdownMenuTrigger className='focus:outline-none'>
						<Ellipsis />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => useGetDetailsByIdDoctorsQuery(id)}>Ver detalles</DropdownMenuItem>
						<DropdownMenuItem onClick={() => console.log(original)}>Editar datos</DropdownMenuItem>
						<DropdownMenuItem onClick={() => handleDelDoctor(id)}>Eliminar</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	}

];

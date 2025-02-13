'use client';


import { Doctors, Service } from '@/infrastructure/interfaces/global.interface';
import { ColumnDef } from '@tanstack/react-table';
import { FormatHelper } from '@/config/helpers';
export const doctorsColumns: ColumnDef<Doctors>[] = [
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
			const value = getValue<number>();
			return !value ? <p className='text-red-400'></p> : <p className='text-black'>{value} </p>;	
		},
	},
	{
		accessorKey: 'birth_date',
		header: 'fecha de nac',
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
			const value = getValue<number>();
			return !value ? <p className='text-red-400'></p> : <p className='text-black'>{value} </p>;	
		},
	},
	{
		accessorKey: 'address',
		header: 'Direccion',
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
		accessorKey: 'actions',
		header: 'Acciones',
		cell: ({ getValue }) => {
			return (
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "#000", cursor: "pointer" }}><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>
				</div>

			);
		},
	}

];

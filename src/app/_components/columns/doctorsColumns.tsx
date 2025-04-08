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
				return  value === undefined ? "sin datos" : `#${value}`;
			},
		},
		{
			accessorKey: 'name',
			header: 'Nombre',
			cell: ({ row }) => {
				const { name } = row.original
				return name === undefined ? "sin datos" : name
			},
		},
		{
			accessorKey: 'last_name',
			header: 'Apellido',
			cell: ({ row }) => {
				const { last_name } = row.original
				return last_name === undefined ? "sin datos" : last_name
			},
		},
		{
			accessorKey: 'email',
			header: 'Correo',
			cell: ({ row }) => {
				const { email } = row.original
				return email === undefined ? "sin datos" : email
			},
		},
		{
			accessorKey: 'dni',
			header: 'DNI',
			cell: ({ row }) => {
				const { dni } = row.original
				return dni === undefined ? "sin datos" : dni
			},
		},
		{
			accessorKey: 'phone_number',
			header: 'Teléfono',
			cell: ({ row }) => {
				const { phone_number } = row.original
				return phone_number === undefined ? "sin datos" : phone_number
			},
		},
		{
			accessorKey: 'especialty',
			header: 'Especialidad',
			cell: ({ row }) => {
				const { especialty } = row.original
				return especialty === undefined ? "sin datos" : especialty
			},
		},
		{
			accessorKey: 'days',
			header: 'Días Laborales',
			cell: ({ row }) => {
				const { days } = row.original
				return days === undefined ? "sin datos" : days
			},
		},
		{
			accessorKey: 'start_time',
			header: 'Hora Inicio',
			cell: ({ row }) => {
				const time = row.original.start_time;
				return time === undefined ? "sin datos" :  FormatHelper.date(time);
			},
		},
		{
			accessorKey: 'end_time',
			header: 'Hora Fin',
			cell: ({ row }) => {
				const time = row.original.end_time;
				return time === undefined ? "sin datos" :  FormatHelper.date(time);
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

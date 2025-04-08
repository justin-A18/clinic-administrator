'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CustomDropdown } from '../shared/dropdown-menu';
import { ActionsColumnsProps } from '@/infrastructure/interfaces/global.interface';
import { Apointment } from '@/core/entities/appointment.entity';
import { FormatHelper } from '@/config/helpers';

export const getAppointmentsColumns = ({
	handleDelete: handleDeleteAppointment,
	handleEdit: handleEditAppointment,
	// handleDetails: handleViewData

}: ActionsColumnsProps): ColumnDef<Apointment>[] => [
		{
			accessorKey: 'doctor_id',
			header: 'ID Doctor',
			cell: ({ row }) => {
				const { doctor_id } = row.original
				return (
					doctor_id ? `#${doctor_id}` : `sin datos`
				)
			},
		},
		{
			accessorKey: 'patient_dni',
			header: 'Nom. y Ape. Paciente',
			cell: ({ row }) => {
				const { patient } = row.original
				return (
					patient ? patient.name + " " + patient.last_name : "sin datos"
				)


			},
		},
		{
			accessorKey: 'date',
			header: 'Fecha cita',
			cell: ({ row }) => {
				const { date } = row.original
				return date ? date : "sin datos"
			},
		},
		{
			accessorKey: 'start_time',
			header: 'Hora inicio cita',
			cell: ({ row }) => {
				const { start_time } = row.original
				return start_time ? FormatHelper.date(start_time) : "sin datos"

			},
		},
		{
			accessorKey: 'end_time',
			header: 'Hora fin cita',
			cell: ({ row }) => {
				const { end_time } = row.original
				return end_time ? FormatHelper.date(end_time) : "sin datos"
			},
		},
		{
			accessorKey: 'paid',
			header: 'Pago de cita',
			cell: ({ row }) => {
				const { paid } = row.original
				return (
					paid ? "pagada" : "pendiente"
				)
			},
		},
		{
			accessorKey: 'total_mount',
			header: 'Monto total',
			cell: ({ row }) => {
				const { total_amount } = row.original
				return FormatHelper.currency(total_amount)
			},
		},
		{
			id: 'actions',
			header: "acciones",
			cell: ({ row }) => {
				const { original } = row;
				return (
					<CustomDropdown key={original.id}
					// handleDetails={() => handleViewData({ 
                    //     entityType: "cita",
                    //     type: "ver",
                    //     data: original
                    // })}
						handleEdit={() =>
							handleEditAppointment({
								entityType: 'cita',
								type: 'editar',
								data: original,
							})}
						handleDelete={() => handleDeleteAppointment(original.id)}
					/>
				)
			},
		},
	];

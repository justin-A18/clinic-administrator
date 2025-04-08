'use client';

import { Dialog, DialogContent } from '../../ui/dialog';
import { useModalStore } from '@/app/_providers/store';
import { lazy } from 'react';

const formComponents = {
	paciente: lazy(() => import('../../patients/PatientForm')),
	doctor: lazy(() => import('../../doctors/DoctorsForm')),
	cita: lazy(() => import('../../appointments/AppointmentsForm')),
	servicio: lazy(() => import('../../services/ServicesForm')),
	paquetes: lazy(() => import('../../packages/PackagesForm'))
};

export const CustomModal = () => {
	const { isOpen, entityType, closeModal } = useModalStore();

	if (!entityType) return null;

	const FormComponent = formComponents[entityType];

	return (
		<Dialog
			open={isOpen}
			onOpenChange={closeModal}>
			<DialogContent className='max-w-4xl'>
				<FormComponent />
			</DialogContent>
		</Dialog>
	);
};

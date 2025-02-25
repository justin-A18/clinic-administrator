'use client';

import { Dialog, DialogContent } from '../../ui/dialog';
import { useModalStore } from '@/app/_providers/store';
import { lazy } from 'react';

const formComponents = {
	paciente: lazy(() => import('../../patients/PatientForm')),
	doctor: lazy(() => import('../../patients/PatientForm')),
	cita: lazy(() => import('../../patients/PatientForm')),
	servicio: lazy(() => import('../../services/ServicesForm')),
	paquete: lazy(() => import('../../patients/PatientForm')),
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

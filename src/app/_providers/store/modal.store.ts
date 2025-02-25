'use client';

import { create } from 'zustand';

export type ModalType = 'ver' | 'editar' | 'crear';
export type EntityType = 'paciente' | 'doctor' | 'servicio' | 'cita';

export interface ModalProps {
	type: ModalType;
	entityType: EntityType;
	data?: unknown;
}
interface ModalState {
	isOpen: boolean;
	type: ModalType | null;
	entityType: EntityType | null;
	data: unknown | null;
	openModal: ({ entityType, type, data }: ModalProps) => void;
	closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
	isOpen: false,
	type: null,
	entityType: null,
	data: null,
	openModal: ({ type, entityType, data }) => set({ isOpen: true, type, entityType, data }),
	closeModal: () => set({ isOpen: false, type: null, entityType: null, data: null }),
}));

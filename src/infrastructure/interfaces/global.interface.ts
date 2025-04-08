import { ModalProps } from "@/app/_providers/store";

export interface HttpResponse {
	data: null;
	message: string;
	status: number;
}
export interface ErrorResponse {
	error: string;
	status: number;
};


export interface ActionsColumnsProps {
	handleEdit: ({ entityType, type, data }: ModalProps) => void;
	handleDelete: (id: number) => void;
	handleDetails: ({ entityType, type, data }: ModalProps) => void;
}
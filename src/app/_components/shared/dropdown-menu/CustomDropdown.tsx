import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';

interface CustomDropdownProps {
	handleEdit: () => void;
	handleDelete: () => void;
	handleDetails?: () => void;
}

export const CustomDropdown = ({
	handleEdit,
	handleDelete,
	handleDetails,
}: CustomDropdownProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='focus:outline-none'>
				<Ellipsis />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem onClick={handleDetails}>
					Ver detalles
				</DropdownMenuItem>
				<DropdownMenuItem onClick={handleEdit}>Editar datos</DropdownMenuItem>
				<DropdownMenuItem onClick={handleDelete}>Eliminar</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

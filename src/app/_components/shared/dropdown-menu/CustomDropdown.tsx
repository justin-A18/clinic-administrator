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
	handleDelete: () => void
}

export const CustomDropdown = ({
	handleEdit,
	handleDelete,
}: CustomDropdownProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='focus:outline-none'>
				<Ellipsis />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem >
					Ver detalles
				</DropdownMenuItem>
				<DropdownMenuItem onClick={handleEdit}>Editar datos</DropdownMenuItem>
				<DropdownMenuItem onClick={handleDelete}>Eliminar</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

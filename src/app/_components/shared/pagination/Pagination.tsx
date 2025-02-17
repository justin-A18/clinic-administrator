import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../ui/button';

interface PaginationProps {
	length: number;
	isLoading: boolean;
}

export const Pagination = ({ length, isLoading }: PaginationProps) => {
	return (
		<footer className='flex items-center justify-between'>
			<div className='flex items-center gap-2'>
				<span className='text-xs text-[#8F8F8F]'>
					{isLoading ? 'Cargando elementos...' : `${length} elementos`}
				</span>
			</div>

			<div className='flex items-center'>
				<Button
					className='rounded-md text-xs px-4 py-3 bg-transparent text-black hover:bg-transparent hover:text-gray-500 shadow-none'
					disabled={isLoading}>
					<ChevronLeft size={16} />
					Anterior
				</Button>
				<Button
					className='rounded-md text-xs px-4 py-3 bg-transparent text-black hover:bg-transparent hover:text-gray-500 shadow-none'
					disabled={isLoading}>
					Siguiente
					<ChevronRight size={16} />
				</Button>
			</div>
		</footer>
	);
};

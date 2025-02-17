import { servicesColumns } from '@/app/_components/columns';
import { DataTable } from '@/app/_components/shared/data-table';
import { Button } from '@/app/_components/ui/button';
import { services } from '@/config/const';
import { Service } from '@/infrastructure/interfaces/global.interface';
import { ChevronLeft, ChevronRight, CircleFadingPlus } from 'lucide-react';

async function getData(): Promise<Service[]> {
	return services;
}

const ServicesPage = async () => {
	const data = await getData();

	return (
		<div className='w-full h-full flex flex-col gap-4'>
			<div className='flex justify-end'>
				<Button className='rounded-md text-sm px-4 py-3 hover:bg-primary/90'>
					<CircleFadingPlus size={20} />
					Crear servicio
				</Button>
			</div>

			<div className='space-y-3'>
				<DataTable
					columns={servicesColumns}
					data={data}
				/>

				<footer className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<span className='text-xs text-[#8F8F8F]'>10 de 100 elementos</span>
					</div>

					<div className='flex items-center'>
						<Button className='rounded-md text-xs px-4 py-3 bg-transparent text-black hover:bg-transparent hover:text-gray-500 shadow-none'>
							<ChevronLeft size={16} />
							Anterior
						</Button>
						<Button className='rounded-md text-xs px-4 py-3 bg-transparent text-black hover:bg-transparent hover:text-gray-500 shadow-none'>
							Siguiente
							<ChevronRight size={16} />
						</Button>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default ServicesPage;

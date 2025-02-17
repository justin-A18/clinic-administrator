// "use client"
import { doctorsColumns } from "@/app/_components/columns/doctorsColumns";
import { DataTable } from "@/app/_components/shared/data-table";
import { Button } from "@/app/_components/ui/button";
import { UseQueryDoctorsGet } from "@/app/_hooks/doctors/DoctorsMutation";
import { doctors } from "@/config/const";
import { DoctorsGetUseCase } from "@/core/use-cases/auth";
import { Doctors } from "@/infrastructure/interfaces/global.interface";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, CircleFadingPlus } from "lucide-react";


const DoctorsPage =  () => {
	

	console.log(UseQueryDoctorsGet)
	return (
		<div className='w-full h-full flex flex-col gap-4'>
			<div className='flex justify-end'>

				<Button className='rounded-md text-sm px-4 py-3 hover:bg-primary/90'>
					<CircleFadingPlus size={20}
					/>
					Crear doctor
				</Button>
			</div>



			<div className={`space-y-3 `}>

				{/* {
					isPending && <p>cargando..</p>
				}
				{
					error && <p>hubo un error</p>
				} */}

				{/* {
					<DataTable
						columns={doctorsColumns}
						data={data as Doctors}
					/>

				} */}
				{/* {
					isPending ?
							<p>Cargando...</p>
						:
				} */}

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



export default DoctorsPage;

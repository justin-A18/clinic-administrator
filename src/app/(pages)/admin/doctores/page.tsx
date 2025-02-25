"use client"
import { doctorsColumns } from "@/app/_components/columns";
import { DataTable } from "@/app/_components/shared/data-table";
import { Pagination } from "@/app/_components/shared/pagination";
import { TableLoadingSkeleton } from "@/app/_components/shared/skeleton";
import { Button } from "@/app/_components/ui/button";
import { useDeleteDoctorMutation } from "@/app/_hooks/doctors/useDeleteDoctorsMutation";
import { GetAllDoctors } from "@/app/_hooks/doctors/useGetAllDoctorsQuery";
import { DoctorsInterface } from "@/infrastructure/interfaces/global.interface";
import { ChevronLeft, ChevronRight, CircleFadingPlus } from "lucide-react";
import { useState } from "react";
import { FormUpdateDoctors } from "./FormUpdateDoctors";
import { CreateDoctorForm } from "./createDoctorForm";

const DoctorsPage = () => {
	const { data, isLoading } = GetAllDoctors()
	const { DoctorsDeleteMutation } = useDeleteDoctorMutation()
	const [modal, Setmodal] = useState(false)
	const [edit, Setedit] = useState(false)
	

	return (
		<div className='w-full h-full flex flex-col gap-4'>
			<div className='flex justify-end'>

				<Button className='rounded-md text-sm px-4 py-3 hover:bg-primary/90' onClick={() => Setmodal(!modal)}>
					<CircleFadingPlus size={20}
					/>
					Crear doctor
				</Button>
				{
					modal ?
					
						// <FormCreateDoctors modal={modal} Setmodal={Setmodal}></FormCreateDoctors>
						<CreateDoctorForm modal={modal} Setmodal={Setmodal}></CreateDoctorForm>
						: null
				}
				{
					edit ?
					<FormUpdateDoctors edit={edit} Setedit={Setedit}></FormUpdateDoctors>
					: null
				}
			</div>



			<div className={`space-y-3 `}>

				{
					isLoading ? (
						<TableLoadingSkeleton />
					)
						: (
							<DataTable 
								columns={doctorsColumns({
									handleDelDoctor: DoctorsDeleteMutation.mutate,
								}) }
								data={data?.data as DoctorsInterface[]}
							/>
						)
				}
				{
					<Pagination
						length={data?.data?.length || 0}
						isLoading={isLoading}
					/>
				}

				<footer className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<span className='text-xs text-[#8F8F8F]'>10 de 100 elementos</span>
					</div>

					<div className='flex items-center'>
						<Button className='rounded-md text-xs px-4 py-3 bg-transparent text-black hover:bg-transparent hover:text-gray-500 text-[10px] shadow-none'>
							<ChevronLeft size={16} />
							Anterior
						</Button>
						<Button className='rounded-md text-xs px-4 py-3 bg-transparent text-black hover:bg-transparent hover:text-gray-500 text-[10px] shadow-none'>
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

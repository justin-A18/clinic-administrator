// "use client"
import { doctorsColumns } from "@/app/_components/columns/doctorsColumns";
import { DataTable } from "@/app/_components/shared/data-table";
import { WindowModal } from "@/app/_components/shared/modal/WindowModal";
import { Button } from "@/app/_components/ui/button";
import { Skeleton } from "@/app/_components/ui/Skeleton";
import { doctors } from "@/config/const";
import { Doctors } from "@/infrastructure/interfaces/global.interface";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, CircleFadingPlus } from "lucide-react";

async function getData(): Promise<Doctors[]> {
	return doctors;
}

const DoctorsPage = async () => {
	const data = await getData();


	// const { isPending, error, data } = useQuery({
	// 	queryKey: ['repoData'],
	// 	queryFn: () =>
	// 	  fetch('https://api.github.com/repos/TanStack/query').then((res) =>
	// 		res.json(),
	// 	  ),
	//   })

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

				{
					!data ?
						<Skeleton />
						:
						<DataTable
							columns={doctorsColumns}
							data={data}
						/>
				}

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

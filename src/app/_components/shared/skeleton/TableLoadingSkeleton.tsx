import { Skeleton } from '../../ui/skeleton';

export const TableLoadingSkeleton = () => {
	return (
		<div className='w-full border rounded-md'>
			<div className='h-12 px-2 py-6 text-left align-middle font-medium text-muted-foreground bg-[#f3f3f3] flex items-center justify-between'>
				{/* {Array.from({ length: 6 }).map((_, i) => (
					<Skeleton
						key={i}
						className='h-4 w-40 mx-2'
					/>
				))} */}
			</div>

			{Array.from({ length: 3 }).map((_, rowIndex) => (
				<div
					key={rowIndex}
					className='odd:bg-[#f3f3f3] w-full transition-colors hover:bg-[#f3f3f3] h-12 px-2 py-[1.7rem] flex items-center justify-between'>
					{Array.from({ length: 8 }).map((_, colIndex) => (
						<Skeleton
							key={colIndex}
							className='h-4 w-40 mx-2'
						/>
					))}
				</div>
			))}
		</div>
	);
};

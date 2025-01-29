export const SideHeader = () => {
	return (
		<header className='p-4 flex items-center w-full gap-3 border-b-[1px] border-[#E8E8E8]'>
			<img
				src='/logo-union.png'
				alt='logo'
				className='size-9'
			/>

			<div className='flex flex-col'>
				<span className='text-sm'>Union</span>
				<span className='text-xs text-[#8F8F8F]'>
					Unimos salud y bienestar.
				</span>
			</div>
		</header>
	);
};

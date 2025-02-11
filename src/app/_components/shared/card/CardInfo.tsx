import { TypographyP } from '../typography';

interface Props {
	icon: React.ReactNode;
	title: string;
	value: number | string;
}

export const CardInfo = ({ icon, title, value }: Props) => {
	return (
		<div className='border-2 border-[#EAEAEA] rounded-lg p-5 flex items-center justify-between'>
			<div className='space-y-2'>
				<TypographyP className='font-medium'>{title}</TypographyP>
				<span className='text-2xl font-semibold'>{value}</span>
			</div>

			<div className='border-2 border-[#6C63FF] inline-flex p-2 rounded-md bg-purple-100 text-[#6C63FF]'>
				{icon}
			</div>
		</div>
	);
};

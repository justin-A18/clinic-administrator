import { CardInfo } from '@/app/_components/shared/card';
import { Calendar } from 'lucide-react';

const CitesPage = () => {
	return (
		<>
			<div className='grid grid-cols-3 gap-4'>
				<CardInfo
					icon={<Calendar size={20} />}
					title='Citas Totales'
					value={4550}
				/>
			</div>
		</>
	);
};

export default CitesPage;

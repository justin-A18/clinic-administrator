import { Bolt, LogOut } from 'lucide-react';
import { Button } from '../../ui/button';
import { SideHeader } from './SideHeader';
import { SideLinks } from './SideLinks';
import { authStore } from '@/app/_providers/store';

export const Sidebar = () => {
	const { removeToken } = authStore();

	return (
		<aside className='sticky   top-0 h-screen border-r-[1px] border-[#E8E8E8]'>
			<SideHeader />
			<div className='flex flex-col justify-between min-h-[calc(100vh-69px)]'>
				<SideLinks />

				<div className='flex flex-col'>
					<Button variant='link'>
						<Bolt size={20} />
						Configuración
					</Button>
					<Button
						variant='link'
						onClick={removeToken}>
						<LogOut size={20} /> Cerrar sesión
					</Button>
				</div>
			</div>
		</aside>
	);
};

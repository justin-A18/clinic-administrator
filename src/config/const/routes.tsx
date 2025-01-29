import {
	Calendar,
	HeartPulse,
	Package,
	Stethoscope,
	Users,
} from 'lucide-react';

export const routesNav = [
	{
		name: 'Citas',
		icon: <Calendar size={20} />,
		route: '/cites',
	},
	{
		name: 'Servicios',
		icon: <HeartPulse size={20} />,
		route: '/services',
	},
	{
		name: 'Paquetes',
		icon: <Package size={20} />,
		route: '/packages',
	},
	{
		name: 'Pacientes',
		icon: <Users size={20} />,
		route: '/patients',
	},
	{
		name: 'Doctores',
		icon: <Stethoscope size={20} />,
		route: '/doctors',
	},
];

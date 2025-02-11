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
		route: '/citas',
	},
	{
		name: 'Servicios',
		icon: <HeartPulse size={20} />,
		route: '/servicios',
	},
	{
		name: 'Paquetes',
		icon: <Package size={20} />,
		route: '/paquetes',
	},
	{
		name: 'Pacientes',
		icon: <Users size={20} />,
		route: '/pacientes',
	},
	{
		name: 'Doctores',
		icon: <Stethoscope size={20} />,
		route: '/doctores',
	},
];

import { Sidebar } from '../_components/shared/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='grid grid-cols-[300px_1fr]'>
			<Sidebar />

			<main>{children}</main>
		</div>
	);
};

export default DashboardLayout;

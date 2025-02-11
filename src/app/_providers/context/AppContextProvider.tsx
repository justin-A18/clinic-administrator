'use client';
import { Toaster } from '@/app/_components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<Toaster />
		</QueryClientProvider>
	);
};

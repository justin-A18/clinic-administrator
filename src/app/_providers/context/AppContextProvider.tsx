'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/app/_components/ui/toaster';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { authStore } from '../store';

export const AppContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const queryClient = new QueryClient();

	const { token } = authStore();

	const router = useRouter();

	useEffect(() => {
		if (token === '' || !token) {
			router.replace('/');
		}
	}, [token, router]);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<Toaster />
		</QueryClientProvider>
	);
};

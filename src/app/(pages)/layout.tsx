'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authStore } from '../_providers/store';

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { token } = authStore();
	const router = useRouter();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!token) {
			router.replace('/');
		} else {
			setLoading(false);
		}
	}, [token, router]);

	if (loading) return null;

	return <>{children}</>;
}

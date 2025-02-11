'use client';

import { Alert, AlertDescription } from '../../ui/alert';
import { cn } from '@/app/_lib/utils';
import { CircleAlert, CircleCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
	className?: string;
	children: React.ReactNode;
	variant?: 'default' | 'destructive' | 'success';
}

export const CustomAlert = ({ children, className, variant }: Props) => {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setHidden(true);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [hidden]);

	return (
		<Alert
			variant={variant}
			hidden={hidden}>
			<AlertDescription className={cn('flex items-center gap-4', className)}>
				{variant === 'destructive' ? (
					<CircleAlert size={30} />
				) : (
					<CircleCheck size={30} />
				)}

				{children}
			</AlertDescription>
		</Alert>
	);
};

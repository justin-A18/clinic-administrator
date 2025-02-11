import { cn } from '@/app/_lib/utils';
import { Button, buttonVariants } from '../../ui/button';
import { VariantProps } from 'class-variance-authority';
import { Loader } from '../loader';

interface Props
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading: boolean;
	className?: string;
	children: React.ReactNode;
}

export const LoadingButton = ({
	isLoading,
	children,
	className,
	...props
}: Props) => {
	return (
		<Button
			className={cn('w-full h-12 rounded-md justify-center', className)}
			disabled={isLoading}
			{...props}>
			{children} {isLoading && <Loader />}
		</Button>
	);
};

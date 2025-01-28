import { cn } from '@/app/_lib/utils';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export function TypographyH1({ children, className }: Props) {
	return (
		<h1
			className={cn(
				'scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl',
				className,
			)}>
			{children}
		</h1>
	);
}

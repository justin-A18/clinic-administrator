import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { AppContextProvider } from './_providers/context';
import './globals.css';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['300', '500', '700'],
});

export const metadata: Metadata = {
	title: 'Union',
	description: 'Unimos salud y bienestar.',
	icons: {
		icon: '/favicon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='es'
			suppressHydrationWarning>
			<body className={`${poppins.variable} antialiased font-poppins`}>
				<AppContextProvider>{children}</AppContextProvider>
			</body>
		</html>
	);
}

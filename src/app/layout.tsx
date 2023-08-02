import { defaultLocale } from '@/src/middleware';
import './styles/global.css';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnam = Be_Vietnam_Pro({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-be-vietnam-pro',
	style: 'normal',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={params.lang ?? defaultLocale}>
			<body className={beVietnam.className}>{children}</body>
		</html>
	);
}

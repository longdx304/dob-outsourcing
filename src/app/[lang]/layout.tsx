import { defaultLocale } from '@/middleware';
import '@/styles/global.css';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import Header from '../../components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import BackToTop from '@/components/Layout/BackToTop/BackToTop';
import ToasterProvider from '@/providers/ToasterProvider';

const beVietnam = Be_Vietnam_Pro({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-be-vietnam-pro',
	style: 'normal',
});

export const metadata: Metadata = {
	title: 'DOB Tech',
	description: 'DOB Tech Website',
};

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={params.lang ?? defaultLocale} id="app">
			<body className={beVietnam.className}>
				<ToasterProvider />
				<Header lang={params.lang ?? defaultLocale} />
				{children}
				<BackToTop />
				<Footer lang={params.lang ?? defaultLocale} />
			</body>
		</html>
	);
}

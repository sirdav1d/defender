/** @format */

import Footer from '@/components/molecules/Footer';
import Header from '@/components/molecules/Header';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import BannerLGPD from '@/components/molecules/BannerLGPD';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '800', '900'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Defender Soluções Em TI',
	description:
		'Somos uma empresa jovem, dinâmica, especializada em serviços e soluções na área da Tecnologia da Informação (TI)',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<link
				rel='shortcut icon'
				href='/icons/favicon.ico'
				type='image/x-icon'
			/>

			<body className={poppins.className}>
				<Header />
				<BannerLGPD />
				<Toaster />
				{children}
				<Footer />
			</body>
		</html>
	);
}

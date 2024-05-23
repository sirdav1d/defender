/** @format */

import Footer from '@/components/molecules/Footer';
import Header from '@/components/molecules/Header';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import BannerLGPD from '@/components/molecules/BannerLGPD';
import GoogleADS from '@/components/Google/ads';

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
			<GoogleADS ADS_MEASUREMENT_ID={'GTM-K9TB9BWD'} />
			<body className={poppins.className}>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-K9TB9BWD'
						height='0'
						width='0'
						className='hidden'></iframe>
				</noscript>
				<Header />
				<Toaster />
				<BannerLGPD />
				{children}
				<Footer />
			</body>
		</html>
	);
}

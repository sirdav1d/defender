/** @format */

'use client';

import { pageview } from '@/helpers/gtag';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleADS({
	ADS_MEASUREMENT_ID,
}: {
	ADS_MEASUREMENT_ID: string;
}) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = pathname + searchParams.toString();

		pageview(ADS_MEASUREMENT_ID, url);
	}, [pathname, searchParams, ADS_MEASUREMENT_ID]);

	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${ADS_MEASUREMENT_ID}`}
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ADS_MEASUREMENT_ID}');
                `,
				}}
			/>

			<Script
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
               gtag('event', 'conversion', {'send_to': '${ADS_MEASUREMENT_ID}/gu8_CI6E3rIZEJX-gNs9'});
         `,
				}}
			/>
		</>
	);
}

/** @format */

'use client';

import Lottie from 'lottie-react';
import notfoundAnimation from '@/../public/lotties/notfound.json';
import React from 'react';

export default function LottieComponent() {
	return (
		<>
			<Lottie
				className='saturate-150'
				animationData={notfoundAnimation}
				loop={true}
			/>
		</>
	);
}

/** @format */

import { MotionDiv } from '@/components/molecules/motionDIv';
import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<MotionDiv
			key={String(children)}
			initial={{ opacity: 0.85, y: 28 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: { duration: 0.8, ease: 'linear' },
			}}
			exit={{ opacity: 0, y: 28 }}>
			{children}
		</MotionDiv>
	);
}

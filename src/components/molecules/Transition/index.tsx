/** @format */

import React from 'react';
import { TransitionAimation } from '@/animations/transition';
import { MotionDiv } from '../motionDIv';

export default function Transition() {
	return (
		<MotionDiv
			className='fixed left-0 h-1 w-screen bottom-0 z-[30] bg-brand-orange-500 rounded-full'
			variants={TransitionAimation}
			initial='close'
			exit='exit'
			animate='open'
			transition={{
				duration: 1000,
				type: 'spring',
				stiffness: 70,
				damping: 15,
			}}></MotionDiv>
	);
}

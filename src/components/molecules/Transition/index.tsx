/** @format */

import React from 'react';
import { TransitionAimation } from '@/animations/transition';
import { MotionDiv } from '../motionDIv';

export default function Transition() {
	return (
		<div className='h-screen w-screen'>
			<MotionDiv
				className='fixed left-0 h-screen w-screen bottom-full z-[30] bg-brand-blue-500'
				variants={TransitionAimation}
				initial='close'
				exit='exit'
				animate='open'
				transition={{
					duration: 0.5,
					type: 'spring',
					stiffness: 40,
					damping: 10,
				}}
			/>
			<MotionDiv
				className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-brand-blue-700'
				variants={TransitionAimation}
				initial='close'
				exit='exit'
				animate='open'
				transition={{
					delay: 0.2,
					duration: 0.5,
					type: 'spring',
					stiffness: 40,
					damping: 10,
				}}
			/>
			<MotionDiv
				className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-brand-blue-900'
				variants={TransitionAimation}
				initial='close'
				exit='exit'
				animate='open'
				transition={{
					delay: 0.4,
					duration: 0.5,
					type: 'spring',
					stiffness: 40,
					damping: 10,
				}}
			/>
		</div>
	);
}

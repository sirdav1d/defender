/** @format */
'use client';
import { MotionDiv } from '@/components/molecules/motionDIv';
import React from 'react';
import { AnimatePresence, easeInOut } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<AnimatePresence mode='sync'>
			{children && (
				<MotionDiv
					key={String(children)}
					initial={{ opacity: 0.9, y: 28 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: { delay: 0.2, duration: 0.8, ease: 'easeInOut' },
					}}
					exit={{ opacity: 0, y: 28 }}>
					{children}
				</MotionDiv>
			)}
		</AnimatePresence>
	);
}

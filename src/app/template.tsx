/** @format */
'use client';
import { MotionDiv } from '@/components/molecules/motionDIv';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<AnimatePresence mode='wait'>
			<MotionDiv
				initial={{ opacity: 0.85, y: 28 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				exit={{ opacity: 0, y: -28 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				{children}
			</MotionDiv>
		</AnimatePresence>
	);
}

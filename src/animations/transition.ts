/** @format */

import { Variants } from 'framer-motion';

export const TransitionAimation: Variants = {
	open: { y: '0%', height: '0%' },
	close: { y: '100%', height: '100%' },
	exit: { y: ['0%', '100%'], height: ['0%', '100%'] },
};

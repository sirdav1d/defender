/** @format */

import { Variants } from 'framer-motion';

export const TransitionAimation: Variants = {
	open: { x: '100%', width: '100vw' },
	close: { x: '0%', width: '0%' },
	exit: { x: '-100%', width: '0%' },
};

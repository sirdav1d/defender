/** @format */

import {
	/** @format */

	Variants,
} from 'framer-motion';

export const BorderAimation: Variants = {
	open: { opacity: 1, x: 0 },
	close: { opacity: 0, x: -20 },
	exit: { opacity: 0, x: 20 },
};

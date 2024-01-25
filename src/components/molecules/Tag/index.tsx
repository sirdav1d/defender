/** @format */

import React from 'react';

export default function Tag({ text }: { text: string }) {
	return (
		<div className='text-sm font-bold text-brand-orange-500 drop-shadow-sm uppercase'>
			{text}
		</div>
	);
}

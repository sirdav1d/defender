/** @format */

import React from 'react';

export default function Container({ children }: { children: JSX.Element }) {
	return (
		<div className='w-full max-w-7xl h-full  px-4 lg:mx-auto flex  flex-col'>
			{children}
		</div>
	);
}

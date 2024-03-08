/** @format */

import React from 'react';

export default function Container({ children }: { children: JSX.Element }) {
	return (
		<div className=' max-w-7xl w-full h-full flex flex-col items-center justify-start  mx-auto px-5 lg:px-10  '>
			{children}
		</div>
	);
}

/** @format */

import React from 'react';
import { links } from '@/constants/links';
import Link from 'next/link';

export default function Navigation() {
	return (
		<ul className=' gap-5 text-stone-100 font-medium flex flex-col lg:flex-row'>
			{links.map((l, index) => {
				return (
					<Link
						className='hover:text-brand-orange-500 transition-all duration-300 ease-linear text-lg lg:text-base'
						key={index}
						href={l.href}>
						<li>{l.nameLink}</li>
					</Link>
				);
			})}
		</ul>
	);
}

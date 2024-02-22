/** @format */

'use client';

import { links } from '@/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navigation() {
	const [isRouting, setIsRouting] = useState(false);
	const path = usePathname();
	const [prevPath, setPrevPath] = useState('/');

	useEffect(() => {
		if (prevPath !== path) {
			setIsRouting(true);
		}
	}, [path, prevPath]);

	useEffect(() => {
		if (isRouting) {
			setPrevPath(path);
			setTimeout(() => {
				setIsRouting(false);
			}, 5000);
		}
	}, [isRouting]);

	return (
		<ul className='gap-4 text-stone-100 font-semibold flex flex-col lg:flex-row uppercase'>
			{links.map((l, index) => {
				return (
					<li
						className={`${
							path === l.href ? 'text-brand-orange-500' : 'text-stone-700'
						} hover:text-brand-orange-500 transition-all ease-linear duration-200`}
						key={index}>
						<Link
							className='hover:text-brand-orange-500 group transition-all duration-300 ease-linear text-xl lg:text-sm flex flex-col'
							key={index}
							href={l.href}>
							{l.nameLink}
							<span
								className={`${
									path === l.href
										? 'bg-brand-orange-500'
										: 'bg-transparent translate-x-4'
								} h-[2px] w-6  rounded-full mt-1 transition-all duration-300 ease-linear`}
							/>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

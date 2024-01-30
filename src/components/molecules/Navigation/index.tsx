/** @format */

'use client';

import { links } from '@/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Transition from '../Transition';

export default function Navigation() {
	const [isRouting, setIsRouting] = useState(false);
	const path = usePathname();
	const [prevPath, setPrevPath] = useState('/');

	useEffect(() => {
		if (prevPath !== path) {
			setIsRouting(true);
		}

		console.log({ path, prevPath });
	}, [path, prevPath]);

	useEffect(() => {
		if (isRouting) {
			setPrevPath(path);
			const timeout = setTimeout(() => {
				setIsRouting(false);
			}, 5000);

		}
	}, [isRouting]);

	return (
		<ul className='gap-5 text-stone-100 font-medium flex flex-col lg:flex-row'>
			{isRouting && <Transition />}
			{links.map((l, index) => {
				return (
					<Link
						className='hover:text-brand-orange-500 group transition-all duration-300 ease-linear text-xl lg:text-base flex flex-col'
						key={index}
						href={l.href}>
						<>
							<li
								className={`${
									path === l.href ? 'text-brand-orange-500' : 'text-stone-950'
								} hover:text-brand-orange-500 transition-all ease-linear duration-200`}>
								{l.nameLink}
							</li>
							<span
								key={l.href}
								className={`${
									path === l.href
										? 'bg-brand-orange-500'
										: 'bg-transparent translate-x-4'
								} h-[2px] w-6  rounded-full mt-2 transition-all duration-300 ease-linear`}
							/>
						</>
					</Link>
				);
			})}
		</ul>
	);
}

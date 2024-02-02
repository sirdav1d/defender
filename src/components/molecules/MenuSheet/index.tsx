/** @format */
'use client';

import logo from '@/../public/logos/defender-logo.png';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify, SquareUserRound } from 'lucide-react';
import Image from 'next/image';
import Navigation from '../Navigation';
import { FaWhatsapp } from 'react-icons/fa6';

import { links } from '@/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Transition from '../Transition';

export default function MenuSheet() {
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
			}, 800);

			return () => clearTimeout(timeout);
		}
	}, [isRouting]);

	return (
		<div className='block lg:hidden'>
			<Sheet>
				<SheetTrigger className='text-stone-100'>
					<AlignJustify
						className='text-stone-900'
						size={40}
					/>
				</SheetTrigger>
				<SheetContent className='bg-stone-50 flex flex-col justify-between items-center text-stone-900'>
					<SheetHeader className='text-stone-900'>
						<SheetTitle className='text-stone-900 text-xl mt-5'>
							<Image
								src={logo}
								alt='logo Defender Soluções em TI'
								width={180}
								height={80}
							/>
						</SheetTitle>
					</SheetHeader>

					<ul className='gap-5 text-stone-100 font-semibold uppercase flex flex-col lg:flex-row'>
						{isRouting && <Transition />}
						{links.map((l, index) => {
							return (
								<Link
									className='hover:text-brand-orange-500 group transition-all duration-300 ease-linear text-xl lg:text-base flex flex-col'
									key={index}
									href={l.href}>
									<SheetClose className='self-start'>
										<>
											<li
												className={`${
													path === l.href
														? 'text-brand-orange-500'
														: 'text-stone-950'
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
									</SheetClose>
								</Link>
							);
						})}
					</ul>

					<Link
						href='https://defenderinfo.tomticket.com/'
						target='_blank'>
						<Button className='font-medium tracking-wider text-sm p-6 flex gap-3 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:496px_100px] group rounded-none drop-shadow-xl'>
							<SquareUserRound />
							Área Do Cliente
						</Button>
					</Link>
				</SheetContent>
			</Sheet>
		</div>
	);
}

/** @format */

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
import { linksMobile } from '@/constants/links';
import { AlignJustify, SquareUserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuSheet() {
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

					<ul className='gap-5 font-semibold flex flex-col'>
						{linksMobile.map((l, index) => {
							return (
								<Link
									className='hover:text-brand-orange-500 group transition-all duration-300 ease-linear text-xl flex flex-col'
									key={index}
									href={l.href}>
									<SheetClose>
										<li className='text-stone-700 hover:text-brand-orange-500 transition-all ease-linear duration-200 uppercase '>
											{l.label}
										</li>
									</SheetClose>
								</Link>
							);
						})}
					</ul>

					<Link
						href='https://defenderinfo.tomticket.com/'
						target='_blank'>
						<Button className='font-medium tracking-wider text-sm p-3 flex gap-3 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:496px_100px] group rounded-none drop-shadow-xl'>
							<SquareUserRound />
							Área Do Cliente
						</Button>
					</Link>
				</SheetContent>
			</Sheet>
		</div>
	);
}

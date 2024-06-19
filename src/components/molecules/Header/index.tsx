/** @format */

import logo from '@/../public/logos/defender-logo.png';
import { Button } from '@/components/ui/button';
import { SquareUserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';
import MenuSheet from '../MenuSheet';
import Navigation from '../Navigation';
import { MotionDiv } from '../motionDIv';

export default function Header() {
	return (
		<div className={`z-50 backdrop-blur-sm w-full fixed py-4 shadow-md`}>
			<>
				<MotionDiv className='w-full absolute h-full top-0 left-0 bg-stone-50 -z-10' />
				<Container>
					<>
						<div className='flex justify-between items-center w-full opacity-100 '>
							<a href='/'>
								<Image
									width={180}
									height={60}
									src={logo}
									alt='Logo Defender Soluções Em TI'
								/>
							</a>
							<div className='hidden lg:flex gap-5 justify-between items-center'>
								<Navigation />
								<Link
									href='https://defenderinfo.tomticket.com/'
									target='_blank'>
									<Button className='font-medium tracking-wider text-sm p-3 flex gap-3 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:496px_100px] group rounded-none drop-shadow-xl'>
										Área Do Cliente <SquareUserRound />
									</Button>
								</Link>
							</div>
							<MenuSheet />
						</div>
					</>
				</Container>
			</>
		</div>
	);
}

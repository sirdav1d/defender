/** @format */
'use client';

import logo from '@/../public/logos/defender-logo.png';
import { useScroll } from 'framer-motion';
import Image from 'next/image';
import Container from '../Container';
import MenuSheet from '../MenuSheet';
import Navigation from '../Navigation';
import { MotionDiv } from '../motionDIv';
import Transition from '../Transition';

export default function Header() {
	const { scrollYProgress } = useScroll({
		offset: ['0% 40%', '15% 100%'],
	});

	return (
		<MotionDiv
			initial={{ y: -24, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className={`z-50 backdrop-blur-sm w-full fixed py-5 shadow-md`}>
			<>
		
				<MotionDiv
					// style={{ opacity: scrollYProgress }}
					className='w-full absolute h-full top-0 left-0 bg-stone-50 -z-10'
				/>
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
							<div className='hidden lg:flex border-l-brand-orange-500'>
								<Navigation />
							</div>
							<MenuSheet />
						</div>
					</>
				</Container>
			</>
		</MotionDiv>
	);
}

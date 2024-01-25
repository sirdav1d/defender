/** @format */

import Container from '@/components/molecules/Container';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface HeroProps {
	img: StaticImageData;
	altImg: string;
	heading: string;
	subHead: string;
}

export default function Hero({ heading, img, subHead, altImg }: HeroProps) {
	return (
		<div className='relative h-screen'>
			<Container>
				<>
					<Image
						className='w-full lg:w-screen h-screen absolute object-cover object-left-bottom -z-10 bg-fixed'
						src={img}
						alt={altImg}
					/>
					<div className='flex flex-col gap-5 w-full h-full lg:max-w-2xl  items-start justify-center lg:mr-auto'>
						<h1 className='text-stone-50 font-bold text-3xl lg:text-4xl tracking-wider uppercase drop-shadow-md leading-snug lg:leading-tight'>
							{heading}
						</h1>
						<h2 className='text-stone-200 font-normal leading-relaxed text-sm lg:text-xl tracking-wide capitalize drop-shadow-md mb-10'>
							{subHead}
						</h2>
						<Button className='font-medium tracking-wider text-lg p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl'>
							Solicitar Orçamento{' '}
							<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
						</Button>
					</div>
				</>
			</Container>
		</div>
	);
}

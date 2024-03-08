/** @format */

import React from 'react';
import Container from '@/components/molecules/Container';
import { MoveRight, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image, { StaticImageData } from 'next/image';

interface SolutionProps {
	title: string;
	bullets: string[];
	img: StaticImageData;
	side: string;
}

export default function Solutions({
	title,
	img,
	bullets,
	side,
}: SolutionProps) {
	return (
		<section className='w-full h-[80vh] overflow-x-hidden py-10 '>
			<Container>
				<div
					data-side={side}
					className='w-full flex flex-col-reverse justify-between items-start h-full gap-10 lg:flex-row lg:data-[side=right]:flex-row-reverse relative'>
					<div className='lg:w-1/2 w-full flex flex-col gap-8 m-auto'>
						<h2 className='font-bold uppercase text-2xl lg:text-3xl mt-2'>
							{title}
						</h2>
						<ul className='flex flex-col gap-5'>
							{bullets.map((b, index) => {
								return (
									<li
										key={index}
										className='flex gap-2'>
										<Trophy className='text-brand-orange-500 size-5'></Trophy>
										<p className='text-sm lg:text-base'>{b}</p>
									</li>
								);
							})}
						</ul>
						<Button className='font-medium w-fit tracking-wider text-lg px-6 py-4 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl'>
							Saiba Mais{' '}
							<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
						</Button>
					</div>

					<div className='lg:w-1/2 w-full h-full relative overflow-hidden'>
						<Image
							className='h-full hover:scale-110 object-cover transition-all duration-200 ease-linear'
							src={img}
							alt={title}
							width={1580}
							height={580}></Image>
					</div>
				</div>
			</Container>
		</section>
	);
}

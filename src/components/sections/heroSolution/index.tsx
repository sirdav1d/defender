/** @format */

import { RevealAimation } from '@/animations/revealAnimation';
import Container from '@/components/molecules/Container';
import { MotionDiv, MotionSpan } from '@/components/molecules/motionDIv';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface HeroSolutionProps {
	title: string;
	spanTitle: string;
	subHeadLine: string;
}

export default function HeroSolution({
	spanTitle,
	title,
	subHeadLine,
}: HeroSolutionProps) {
	return (
		<div className={`relative h-screen `}>
			<Container>
				<>
					<span className='h-6 w-40 lg:w-80 blur-3xl bg-brand-orange-500 absolute top-40  lg:top-80 left-0  lg:left-1/4 -rotate-45'></span>
					<span className='h-6 w-40 lg:w-56 blur-3xl bg-brand-orange-500 absolute bottom-80 right-0 lg:right-1/3 rotate-45'></span>
					<a href='#solutions'>
						<div className='absolute bottom-20 lg:bottom-12 h-16 w-8 border-2 rounded-full border-brand-orange-500 bg-transparent'>
							<MotionSpan
								animate={{ y: 40 }}
								initial={{ y: 0 }}
								transition={{
									type: 'spring',
									repeatType: 'reverse',
									repeat: Infinity,
								}}
								className='bg-brand-orange-500 flex w-4 h-4 rounded-full z-10 m-auto'></MotionSpan>
						</div>
					</a>

					<div className='flex flex-col gap-5 w-full h-full lg:max-w-2xl xl:max-w-4xl lg:text-center  lg:items-center justify-center'>
						<MotionDiv
							variants={RevealAimation}
							transition={{ delay: 0.2, type: 'spring' }}
							animate={'open'}
							initial='close'>
							<h1 className='text-stone-900 font-extrabold text-2xl lg:text-4xl tracking-wider uppercase drop-shadow-md lg:text-center leading-snug lg:leading-tight'>
								{title}
								<span className='text-brand-orange-500'> {spanTitle}</span>
							</h1>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							transition={{ delay: 0.4, type: 'spring' }}
							animate={'open'}
							initial='close'>
							<h2 className='text-stone-700 prose prose-sm lg:prose-lg font-normal leading-relaxed tracking-wide capitalize drop-shadow-md mb-10'>
								{subHeadLine}
							</h2>
						</MotionDiv>
						<MotionDiv
							className='mt-10'
							variants={RevealAimation}
							transition={{ delay: 0.6, type: 'spring' }}
							animate={'open'}
							initial='close'>
							<Link href='/contact#form'>
								<Button className='font-medium tracking-wider text-lg px-6 py-4 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl'>
									Solicitar Orçamento{' '}
									<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
								</Button>
							</Link>
						</MotionDiv>
					</div>
				</>
			</Container>
		</div>
	);
}

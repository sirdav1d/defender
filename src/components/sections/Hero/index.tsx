/** @format */

import { RevealAimation } from '@/animations/revealAnimation';
import Container from '@/components/molecules/Container';
import { MotionDiv } from '@/components/molecules/motionDIv';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
	heading: string;
	subHead: string;
	page: string;
}

export default function Hero({ heading, subHead, page }: HeroProps) {
	return (
		<div
			data-page={page}
			className={`relative h-screen data-[page=home]:bg-bgHome data-[page=about]:bg-bgAbout data-[page=solutions]:bg-bgSolutions  data-[page=projects]:bg-bgProjects data-[page=contact]:bg-bgContact bg-cover bg-no-repeat`}>
			<Container>
				<>
					<div className='flex flex-col gap-5 w-full h-full lg:max-w-2xl  items-start justify-center lg:mr-auto'>
						<MotionDiv
							variants={RevealAimation}
							transition={{ delay: 0.2, type: 'spring' }}
							animate={'open'}
							initial='close'>
							<h1 className='text-stone-50 font-bold text-3xl lg:text-4xl tracking-wider uppercase drop-shadow-md leading-snug lg:leading-tight'>
								{heading}
							</h1>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							transition={{ delay: 0.4, type: 'spring' }}
							animate={'open'}
							initial='close'>
							<h2 className='text-stone-200 font-normal leading-relaxed text-sm md:text-lg lg:text-xl tracking-wide capitalize drop-shadow-md mb-10'>
								{subHead}
							</h2>
						</MotionDiv>
						<MotionDiv
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

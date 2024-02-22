/** @format */

import React from 'react';
import Container from '../Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { MotionDiv } from '../motionDIv';
import { RevealAimation } from '@/animations/revealAnimation';

export default function CTA() {
	return (
		<MotionDiv
			variants={RevealAimation}
			viewport={{ once: true }}
			transition={{ delay: 0.2, type: 'spring' }}
			whileInView={'open'}
			initial='close'
			className='mb-20'>
			<div className='bg-bgCTA w-full px-4  py-8 flex flex-col justify-center items-center gap-5 shadow-xl'>
				<h2 className='font-bold text-stone-50 text-2xl lg:text-3xl uppercase text-center tracking-wide'>
					Proteja Seu Negócio Hoje
				</h2>
				<p className='prose prose-sm lg:prose-lg capitalize text-stone-100 mb-5 text-center'>
					Garanta a segurança do seu negócio com nossas soluções integradas.
					Proteção avançada para um futuro mais seguro.
				</p>
				<Link href={'/contact'}>
					<Button className='font-medium w-full tracking-wider text-base md:text-lg py-4 px-6 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:896px_100px] group rounded-none drop-shadow-xl md:max-w-fit'>
						Falar Com Setor Comercial
						<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
					</Button>
				</Link>
			</div>
		</MotionDiv>
	);
}

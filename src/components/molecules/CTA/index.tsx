/** @format */

import React from 'react';
import Container from '../Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export default function CTA() {
	return (
		<div className='mb-20'>
			<div className='bg-bgCTA w-full px-4  py-8 flex flex-col justify-center items-center gap-5 shadow-xl'>
				<h2 className='font-bold text-stone-50 text-2xl lg:text-3xl uppercase text-center'>
					Proteja Seu Negócio Hoje
				</h2>
				<p className='prose lg:prose-lg capitalize text-stone-100 mb-5 text-center'>
					Garanta a segurança do seu negócio com nossas soluções integradas.
					Proteção avançada para um futuro mais seguro.
				</p>
				<Link href={'/contact'}>
					<Button className='font-medium tracking-wider text-lg p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl max-w-fit'>
						Ver Mais Serviços
						<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
					</Button>
				</Link>
			</div>
		</div>
	);
}

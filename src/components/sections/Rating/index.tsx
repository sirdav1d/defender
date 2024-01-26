/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Rating() {
	return (
		<div>
			<Container>
				<>
					<div className='flex flex-col gap-5 w-full'>
						<Tag text={'Confiança'}></Tag>
						<h2 className='font-bold text-2xl lg:text-3xl uppercase mt-2'>
							O Que Dizem Sobre Nós
						</h2>
						<p className='mb-5 lg:prose prose-sm'>
							Conheça as opiniões de empresas que se tornaram parceiras de
							sucesso com a Defender Soluções em TI. Suas vozes ressoam a
							confiança e eficácia dos nossos serviços.
						</p>
						<Link href={'/projects'}>
							<Button className='font-medium tracking-wider text-lg p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl w-fit'>
								Ver Projetos
								<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
							</Button>
						</Link>
					</div>
				</>
			</Container>
		</div>
	);
}

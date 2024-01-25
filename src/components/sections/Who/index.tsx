/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export default function Who() {
	return (
		<div className='w-full'>
			<Container>
				<>
					<div className='flex flex-col gap-5 items-start w-full '>
						<Tag text={'Valores'}></Tag>

						<h2 className='font-bold uppercase text-2xl lg:text-3xl  mt-2'>
							Sobre a Defender
						</h2>
						<p className='lg:prose prose-sm'>
							Descubra os valores fundamentais que guiam nossas ações e a
							abordagem singular que nos torna a escolha ideal em serviços e
							consultoria tecnológica.
						</p>

						<Link href={'/about'}>
							<Button className='font-medium tracking-wider text-lg p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl max-w-fit'>
								Saiba Mais
								<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
							</Button>
						</Link>
					</div>
				</>
			</Container>
		</div>
	);
}

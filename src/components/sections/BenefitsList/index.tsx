/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { benefits } from '@/constants/benefits';
import Image from 'next/image';
import React from 'react';

export default function BenefitsList() {
	return (
		<div className='py-20 w-full'>
			<Container>
				<>
					<div className='flex flex-col gap-5'>
						<Tag text={'Vantagens'}></Tag>
						<div className='flex justify-between mt-2 items-start flex-col lg:flex-row gap-5'>
							<h2 className='font-bold uppercase text-2xl lg:text-3xl  mt-2'>
								Transformando Desafios em Vantagens Competitivas
							</h2>
							<p className='lg:prose prose-sm'>
								Nossos benefícios vão além do convencional, proporcionando
								inovação, segurança e suporte contínuo para manter sua empresa à
								frente do jogo.
							</p>
						</div>
					</div>
					<ul className=' w-full'>
						{' '}
						{benefits.map((b, index) => {
							return (
								<li
									key={index}
									className='mt-10 w-full '>
									<div
										data-role={b.side}
										className='flex items-start lg:items-center w-full flex-col-reverse lg:flex-row  justify-between gap-10 lg:data-[role=right]:flex-row-reverse'>
										<Image
											className='drop-shadow-md'
											width={580}
											height={240}
											src={b.image}
											alt={b.title}></Image>
										<div className='flex flex-col gap-5'>
											<Tag text={b.tag}></Tag>
											<h3 className='text-2xl font-bold uppercase'>
												{b.title}
											</h3>
											<p className='prose prose-sm'>{b.description}</p>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</>
			</Container>
		</div>
	);
}

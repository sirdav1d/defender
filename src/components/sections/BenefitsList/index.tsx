/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import React from 'react';
import { benefits } from '@/constants/benefits';
import Image from 'next/image';

export default function BenefitsList() {
	return (
		<div className='pt-20'>
			<Container>
				<>
					<div>
						<div className='flex flex-col gap-5'>
							<Tag text={'Tecnologia'} />
							<div className='flex justify-between mt-2 items-start flex-col xl:flex-row gap-5'>
								<h2 className='font-bold uppercase text-2xl lg:text-3xl  mt-2'>
									Benefícios Personalizados para Sua Empresa
								</h2>
								<p className='lg:prose prose-sm'>
									Descubra Como Nossas Soluções Tecnológicas Diferenciadas Podem
									Posicionar Sua Empresa à Frente da Concorrência
								</p>
							</div>
						</div>
						<ul className='w-full mt-10 grid grid-cols-2 lg:grid-cols-4 gap-10'>
							{benefits.map((b, index) => {
								return (
									<li
										key={index}
										className='flex flex-col justify-center items-center gap-5 w-full'>
										<Image
											className='drop-shadow-icon'
											width={48}
											height={48}
											src={b.icon}
											alt={b.title}></Image>
										<h3 className='font-bold uppercase text-center'>
											{b.title}
										</h3>
									</li>
								);
							})}
						</ul>
					</div>
				</>
			</Container>
		</div>
	);
}

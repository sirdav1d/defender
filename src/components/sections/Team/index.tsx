/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { team } from '@/constants/team';
import { Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Team() {
	return (
		<div className='w-full pb-20'>
			<Container>
				<>
					<div className='w-full flex items-start flex-col gap-5'>
						<Tag text={'comunidade'} />
						<h2 className='mt-2 uppercase font-bold text-2xl lg:text-3xl'>
							Nosso Time, Sua Garantia de Excelência
						</h2>
						<p className='prose prose-sm lg:prose-lg'>
							Conheça as Mentes Brilhantes que Compõem a Defender. Nossa Equipe,
							com Expertise e Paixão, É a Chave para Desbloquear Soluções
							Tecnológicas Excepcionais
						</p>
					</div>
					<ul className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 w-full '>
						{team.map((t, index) => {
							return (
								<li key={index}>
									<Image
										width={480}
										height={300}
										alt={t.name}
										src={t.image}></Image>
									<div className='flex gap-5 items-center justify-start mt-2 '>
										<h3 className='font-bold text-lg'>{t.name}</h3>
										<a
											className='hover:text-brand-orange-500 transition-all duration-200 ease-linear'
											href='http://'
											target='_blank'
											rel='noopener noreferrer'>
											<Linkedin />
										</a>
										<a
											className='hover:text-brand-orange-500 transition-all duration-200 ease-linear'
											href='http://'
											target='_blank'
											rel='noopener noreferrer'>
											{' '}
											<Mail />
										</a>
									</div>
								</li>
							);
						})}{' '}
					</ul>
				</>
			</Container>
		</div>
	);
}

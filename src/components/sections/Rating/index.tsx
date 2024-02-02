/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { Button } from '@/components/ui/button';
import { ratings } from '@/constants/ratings';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { MotionDiv } from '@/components/molecules/motionDIv';
import { RevealAimation } from '@/animations/revealAnimation';

export default function Rating() {
	return (
		<div className='pb-20'>
			<Container>
				<>
					<div className='flex flex-col gap-5 w-full'>
						<Tag text={'Confiança'}></Tag>
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.2, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<h2 className='font-bold text-2xl lg:text-3xl uppercase mt-2'>
								O Que Dizem Sobre Nós
							</h2>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.4, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<p className='mb-5 lg:prose prose-sm'>
								Conheça as opiniões de empresas que se tornaram parceiras de
								sucesso com a Defender Soluções em TI. Suas vozes ressoam a
								confiança e eficácia dos nossos serviços.
							</p>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.6, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<Link href={'/project'}>
								<Button className='font-medium tracking-wider text-lg p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl w-fit'>
									Ver Projetos
									<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
								</Button>
							</Link>{' '}
						</MotionDiv>
					</div>
					<ul className='flex gap-10 justify-between w-full items-end mt-10 flex-col lg:flex-row'>
						{ratings.map((r, index) => {
							return (
								<li
									key={index}
									className='flex gap-10 justify-center items-center'>
									<MotionDiv
										variants={RevealAimation}
										viewport={{ once: true }}
										transition={{ delay: 0.2 * index, type: 'spring' }}
										whileInView={'open'}
										initial='close'
										className='flex-col flex gap-5'>
										<p className='lg:prose prose-sm text-center'>
											{r.testimonial}
										</p>
										<div className='flex gap-2 items-center justify-center'>
											<Image
												width={60}
												height={60}
												src={r.image}
												alt={r.name}></Image>
											<h3 className='font-bold lg:text-lg text-base'>
												{r.name}
											</h3>
										</div>
									</MotionDiv>
								</li>
							);
						})}
					</ul>
				</>
			</Container>
		</div>
	);
}

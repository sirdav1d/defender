/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import React from 'react';
import { culture } from '@/constants/culture';
import Image from 'next/image';
import { MotionDiv } from '@/components/molecules/motionDIv';
import { RevealAimation } from '@/animations/revealAnimation';

export default function Culture() {
	return (
		<div className='py-20 w-full'>
			<Container>
				<>
					<div className='w-full flex items-start flex-col gap-5'>
						<Tag text={'cultura'} />
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.2, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<h2 className='mt-2 uppercase font-bold text-2xl lg:text-3xl'>
								Sobre a Defender Soluções em TI
							</h2>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.4, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<p className='prose prose-sm lg:prose-lg'>
								Em 2009 se concretizou um projeto pensado, idealizado e sonhado
								por seus sócios-fundadores: a Defender Soluções em TI. Uma
								empresa que nasceu da paixão de seus profissionais pela
								utilização da tecnologia da informação
							</p>
						</MotionDiv>
					</div>
					<ul className='flex gap-10 w-full flex-col lg:flex-row mt-10'>
						{culture.map((c, index) => {
							return (
								<li key={index}>
									<MotionDiv
										className='flex flex-col gap-4 h-full  justify-start items-start shadow-cardShadow p-5 w-[368px]'
										variants={RevealAimation}
										viewport={{ once: true }}
										transition={{ delay: 0.25 * index, type: 'spring' }}
										whileInView={'open'}
										initial='close'>
										<div className='flex gap-3 items-center '>
											<Image
												className='drop-shadow-icon'
												width={40}
												height={40}
												src={c.icon}
												alt={c.title}
											/>
											<h3 className='uppercase font-bold text-xl'>{c.title}</h3>
										</div>
										<p className='prose prose-sm lg:prose'>{c.description}</p>
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

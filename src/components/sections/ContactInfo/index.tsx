/** @format */

import { RevealAimation } from '@/animations/revealAnimation';
import Container from '@/components/molecules/Container';
import FormComponent from '@/components/molecules/FormComponent';
import Tag from '@/components/molecules/Tag';
import { MotionDiv } from '@/components/molecules/motionDIv';
import React from 'react';

export default function ContactInfo() {
	return (
		<div className='py-20'>
			<Container>
				<>
					<div className='flex w-full justify-between items-baseline flex-col gap-10 lg:gap-0 lg:flex-row'>
						<div className='lg:w-1/2 justify-between flex flex-col  '>
							<div className='flex flex-col gap-5 '>
								<Tag text={'iniciativa'}></Tag>
								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.2, type: 'spring' }}
									whileInView={'open'}
									initial='close'>
									<h2 className='font-bold uppercase text-2xl lg:text-3xl  mt-2'>
										Explore Oportunidades de Colaboração
									</h2>
								</MotionDiv>
								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.4, type: 'spring' }}
									whileInView={'open'}
									initial='close'>
									<p className='lg:prose prose-sm'>
										Estamos abertos a parcerias e colaborações. Preencha nosso
										formulário para iniciar uma conversa sobre como podemos
										trabalhar juntos para alcançar seus objetivos tecnológicos
									</p>
								</MotionDiv>
							</div>

							<div className='flex w-full justify-between items-center mt-10'>
								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 1, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex flex-col gap-3'>
									<h4 className='uppercase font-bold text-base lg:text-lg'>
										Telefone
									</h4>
									<p className='prose prose-sm'>(21) 99896 - 6588</p>
								</MotionDiv>
							</div>
						</div>

						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.25, type: 'spring' }}
							whileInView={'open'}
							initial='close'
							className='lg:w-1/2 w-full flex items-end justify-center lg:justify-end '>
							<FormComponent />
						</MotionDiv>
					</div>
				</>
			</Container>
		</div>
	);
}

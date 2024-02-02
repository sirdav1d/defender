/** @format */

import { RevealAimation } from '@/animations/revealAnimation';
import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { MotionDiv } from '@/components/molecules/motionDIv';
import React from 'react';

export default function Timeline() {
	return (
		<div className='pb-20'>
			<Container>
				<>
					<div className='w-full flex  gap-10 flex-col lg:flex-row'>
						<div className='xl:w-1/2 w-full flex items-start flex-col gap-5'>
							<Tag text={'história'}></Tag>
							<MotionDiv
								variants={RevealAimation}
								viewport={{ once: true }}
								transition={{ delay: 0.2, type: 'spring' }}
								whileInView={'open'}
								initial='close'>
								<h2 className='font-bold text-2xl lg:text-3xl uppercase mt-2'>
									Desbravando Fronteiras Tecnológicas
								</h2>
							</MotionDiv>
							<MotionDiv
								variants={RevealAimation}
								viewport={{ once: true }}
								transition={{ delay: 0.4, type: 'spring' }}
								whileInView={'open'}
								initial='close'>
								<p className='prose prose-sm lg:prose-lg'>
									Desbravamos Fronteiras Tecnológicas em Cada Etapa. Conheça os
									Desafios que Superamos e Como Continuamos a Moldar o Futuro
									com Inovação
								</p>
							</MotionDiv>
						</div>
						<div className='xl:w-1/2 w-full'>
							<div className='relative flex flex-col gap-10 w-full h-full justify-between '>
								<span className='absolute h-[90%] w-1 rounded-full -z-10 bg-brand-orange-100 translate-x-3 xl:translate-x-4' />

								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.2, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex gap-5 w-full '>
									<span className='rounded-full bg-brand-orange-300 w-12 h-8 md:w-10 md:h-10 flex items-center justify-center text-brand-orange-900 xl:text-xl drop-shadow-md'>
										1
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											2005 - Fundação da Defender Soluções em TI
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											A empresa nasce com a missão de fornecer serviços e
											consultoria em TI para empresas de diversos segmentos. Os
											fundadores estabelecem os princípios fundamentais de
											inovação e compromisso com o cliente
										</p>
									</div>
								</MotionDiv>

								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.4, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex gap-5 w-full '>
									<span className=' rounded-full bg-brand-orange-300 w-12 h-8 md:w-10 md:h-10  flex items-center justify-center text-brand-orange-900 xl:text-xl drop-shadow-md'>
										2
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											2010 - Expansão do Portfólio de Serviços
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											Em resposta às demandas do mercado, a Defender expande seu
											portfólio para incluir suporte proativo 24/7, antivírus
											gerenciado, e monitoramento remoto
										</p>
									</div>
								</MotionDiv>
								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.6, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex gap-5 w-full '>
									<span className=' rounded-full bg-brand-orange-300 w-12 h-8 md:w-10 md:h-10  flex items-center justify-center text-brand-orange-900 xl:text-xl drop-shadow-md'>
										3
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											2015 - Parceria Estratégica com a Microsoft
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											A Defender estabelece uma parceria estratégica com a
											Microsoft, ampliando seu escopo para incluir soluções
											Microsoft, como o Office 365. A colaboração reforça a
											expertise da empresa em tecnologias de ponta
										</p>
									</div>
								</MotionDiv>

								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.8, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex gap-5 w-full '>
									<span className=' rounded-full bg-brand-orange-300 w-12 h-8 md:w-10 md:h-10  flex items-center justify-center text-brand-orange-900 xl:text-xl drop-shadow-md'>
										4
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											2020 - Inovações em Redes e Segurança
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											Em resposta à evolução do cenário digital, a Defender foca
											em inovações em redes corporativas, oferecendo serviços de
											cabeamento estruturado e fortalecendo a segurança com
											soluções de firewall avançadas
										</p>
									</div>
								</MotionDiv>

								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 1, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex gap-5 w-full '>
									<span className=' rounded-full bg-brand-orange-300 w-12 h-8 md:w-10 md:h-10  flex items-center justify-center text-brand-orange-900 xl:text-xl drop-shadow-md'>
										5
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											2023 - Reconhecimento como Líder em Soluções Tecnológicas
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											A Defender consolida sua posição como líder em soluções
											tecnológicas, sendo reconhecida pela excelência,
											compromisso com o cliente e inovação
										</p>
									</div>
								</MotionDiv>
							</div>
						</div>
					</div>
				</>
			</Container>
		</div>
	);
}

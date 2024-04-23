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
									Com pouco mais de 15 anos de existência, a empresa já cresceu
									fortemente e forma um respeitável portfólio de clientes e
									parceiros que utilizam seus serviços de suporte, manutenção e
									consultoria de TI
								</p>
							</MotionDiv>
						</div>
						<div className='xl:w-1/2 w-full'>
							<div className='relative flex flex-col gap-10 w-full h-full justify-between '>
								<span className='absolute h-[70%] w-1 rounded-full -z-10 bg-brand-orange-100 translate-x-3.5 xl:translate-x-5' />

								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.2, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									className='flex gap-5 w-full '>
									<span className='rounded-full bg-brand-orange-300 h-8 w-12 md:h-10 flex items-center justify-center text-brand-orange-900 xl:text-xl drop-shadow-md'>
										1
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											2009 - Fundação da Defender Soluções em TI
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											Uma empresa que nasceu da paixão de seus profissionais
											pela utilização da tecnologia da informação
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
									<span className=' rounded-full bg-brand-orange-300 w-12 h-8  md:h-10  flex items-center justify-center text-brand-orange-900 xl:text-xl drop-shadow-md'>
										2
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											2012 - Expansão do Portfólio de Serviços
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											No intuito de atender micro, pequenas e medias empresas,
											desenvolvemos planos de atendimentos personalizados,
											soluções e serviços com valores competitivos para este
											seguimento do mercado
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
									<span className=' rounded-full bg-brand-orange-300 w-12 h-8 md:h-10  flex items-center justify-center text-brand-orange-900 xl:text-xl drop-shadow-md'>
										3
									</span>
									<div className='flex flex-col gap-2'>
										<h3 className='font-bold uppercase text-base'>
											Atualmente - Parcerias Estratégicas
										</h3>
										<p className='prose lg:prose-sm text-xs'>
											Hoje a Defender Soluções em TI é uma empresa que entrega
											diversos tipos de serviços: Suporte TI para Empresas,
											Proteção De Dados, Soluções Microsoft, Segurança de redes
											com Firewall, Instalação de Redes (Cabo e WI-FI) e
											Sistemas de Segurança Eletrônica
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

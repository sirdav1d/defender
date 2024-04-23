/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { Button } from '@/components/ui/button';
import { servs } from '@/constants/servs';
import { MoveRight } from 'lucide-react';
import CardServs from './CardServs';
import Link from 'next/link';
import { MotionDiv } from '@/components/molecules/motionDIv';
import { RevealAimation } from '@/animations/revealAnimation';

export default function Services() {
	return (
		<div className='py-20 w-screen '>
			<Container>
				<>
					<div className='flex flex-col gap-5 max-w-3xl w-full mr-auto  '>
						<Tag text={'INOVAÇÃO CONSTANTE'} />
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.2, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<h2 className='font-bold text-2xl lg:text-3xl uppercase mt-2'>
								SOLUÇÕES GERENCIADAS DE TI
							</h2>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							transition={{ delay: 0.4, type: 'spring' }}
							viewport={{ once: true }}
							whileInView={'open'}
							initial='close'>
							<p className='mb-5 lg:prose prose-sm '>
								Aumente a produtividade da sua Empresa e diminua as dores de
								cabeça com incidentes tecnológicos
							</p>
						</MotionDiv>
					</div>
					<ul className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-5 w-full   mt-10  '>
						{servs.map((s, index) => {
							return (
								<li key={index}>
									<Link
										href={s.href}
										className='hover:drop-shadow-2xl transition-all duration-300 ease-linear '>
										<MotionDiv
											variants={RevealAimation}
											transition={{ delay: 0.15 * index, type: 'spring' }}
											viewport={{ once: true }}
											whileInView={'open'}
											initial='close'>
											<CardServs
												icon={s.icon}
												title={s.title}
												description={s.description}
											/>
										</MotionDiv>
									</Link>
								</li>
							);
						})}
					</ul>
				</>
			</Container>
		</div>
	);
}

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
						<Tag text={'Inovação'} />
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.2, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<h2 className='font-bold text-2xl lg:text-3xl uppercase mt-2'>
								Soluções Integradas de TI
							</h2>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							transition={{ delay: 0.4, type: 'spring' }}
							viewport={{ once: true }}
							whileInView={'open'}
							initial='close'>
							<p className='mb-5 lg:prose prose-sm '>
								Integramos suporte personalizado, segurança avançada
								einfraestrutura de rede para proporcionar soluções de TI
								abrangentes e eficientes
							</p>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							transition={{ delay: 0.6, type: 'spring' }}
							viewport={{ once: true }}
							whileInView={'open'}
							initial='close'>
							<Link href={'/solutions'}>
								<Button className='font-medium tracking-wider  text-base px-6 py-4 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl max-w-fit'>
									Ver Mais Serviços
									<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
								</Button>
							</Link>
						</MotionDiv>
					</div>
					<ul className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-5 w-full   mt-10  '>
						{servs.map((s, index) => {
							return (
								<li key={index}>
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
								</li>
							);
						})}
					</ul>
				</>
			</Container>
		</div>
	);
}

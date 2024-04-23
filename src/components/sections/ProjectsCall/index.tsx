/** @format */

import { RevealAimation } from '@/animations/revealAnimation';
import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { MotionDiv } from '@/components/molecules/motionDIv';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function ProjectsCall() {
	return (
		<div className='w-full pb-20'>
			<Container>
				<>
					<div className='flex flex-col gap-5 items-start w-full '>
						<Tag text={'Projetos Reais'}></Tag>
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.2, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<h2 className='font-bold uppercase text-2xl lg:text-3xl  mt-2'>
								Nosso Portfólio de Sucesso
							</h2>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.4, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<p className='lg:prose prose-sm'>
								Explore nossa coleção com projetos de alta relevância
								concluídos, demonstrando nossa experiência e excelência em
								diversas áreas da tecnologia
							</p>
						</MotionDiv>
						<MotionDiv
							variants={RevealAimation}
							viewport={{ once: true }}
							transition={{ delay: 0.6, type: 'spring' }}
							whileInView={'open'}
							initial='close'>
							<Link href={'/project'}>
								<Button className='font-medium tracking-wider  text-base px-6 py-4 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl max-w-fit'>
									Ver Projetos
									<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
								</Button>
							</Link>
						</MotionDiv>
					</div>
				</>
			</Container>
		</div>
	);
}

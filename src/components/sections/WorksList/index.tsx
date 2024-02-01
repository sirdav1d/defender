/** @format */
'use server';

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { queryGallery, request } from '@/lib/datocms';
import WorksCardList from '../../molecules/WorksCardList';
import { MotionDiv } from '@/components/molecules/motionDIv';
import { RevealAimation } from '@/animations/revealAnimation';

export default async function WorksList() {
	const data: any = await request({ query: queryGallery, revalidate: 30 });

	return (
		<>
			<div className='w-full pb-20'>
				<Container>
					<>
						<div className='flex flex-col gap-5 items-start w-full '>
							<Tag text={'Compromisso'} />
							<div>
								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.2, type: 'spring' }}
									whileInView={'open'}
									initial='close'>
									<h2 className='font-bold uppercase text-2xl lg:text-3xl  mt-2'>
										Projeto a Projeto: Uma História de Sucesso
									</h2>
								</MotionDiv>
								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.4, type: 'spring' }}
									whileInView={'open'}
									initial='close'>
									<p className='lg:prose prose-sm'>
										Descubra Como Enfrentamos Desafios e Alcançamos Resultados
										Excepcionais que Moldaram o Futuro Tecnológico
									</p>
								</MotionDiv>
							</div>
						</div>

						<WorksCardList
							subscription={{
								initialData: data,
								query: queryGallery,
								token: process.env.NEXT_DATOCMS_TOKEN,
							}}
						/>
					</>
				</Container>
			</div>
		</>
	);
}

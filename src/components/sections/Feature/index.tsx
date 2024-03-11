/** @format */

import { RevealAimation } from '@/animations/revealAnimation';
import { SlideUpAnimation } from '@/animations/slideUp';
import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { MotionDiv } from '@/components/molecules/motionDIv';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface FeatureProps {
	image: StaticImageData;
	side: string;
	tag: string;
	title: string;
	description: string;
}

interface AllFeatureProps {
	tag: string;
	heading: string;
	description: string;
	featureList: FeatureProps[];
}

export default function Feature(props: AllFeatureProps) {
	return (
		<div
			id='solutions'
			className='py-12 my-12 w-full'>
			<Container>
				<>
					<ul className=' w-full'>
						{' '}
						{props.featureList?.map((b, index) => {
							return (
								<li
									key={index}
									className=' w-full mb-10'>
									<div
										data-role={b.side}
										className='flex items-center w-full flex-col-reverse lg:flex-row  justify-between gap-10 lg:data-[role=right]:flex-row-reverse'>
										<MotionDiv
											className='overflow-hidden'
											variants={SlideUpAnimation}
											viewport={{ once: true }}
											transition={{ delay: 0.2, type: 'spring' }}
											whileInView={'open'}
											initial='close'>
											<Image
												className='drop-shadow-md hover:scale-110 duration-200 ease-linear transition-all'
												width={400}
												height={240}
												src={b.image}
												alt={b.title}></Image>
										</MotionDiv>
										<div className='flex flex-col gap-5'>
											<Tag text={b.tag}></Tag>
											<MotionDiv
												variants={RevealAimation}
												viewport={{ once: true }}
												transition={{ delay: 0.4, type: 'spring' }}
												whileInView={'open'}
												initial='close'>
												<h3 className='text-xl lg:text-2xl font-bold uppercase mt-2'>
													{b.title}
												</h3>
											</MotionDiv>
											<MotionDiv
												variants={RevealAimation}
												viewport={{ once: true }}
												transition={{ delay: 0.6, type: 'spring' }}
												whileInView={'open'}
												initial='close'>
												<p className='prose prose-sm'>{b.description}</p>
											</MotionDiv>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</>
			</Container>
		</div>
	);
}

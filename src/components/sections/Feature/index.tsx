/** @format */

import { RevealAimation } from '@/animations/revealAnimation';
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
		<div className='py-20 w-full'>
			<Container>
				<>
					<div className='flex flex-col gap-5 w-full'>
						<Tag text={props.tag}></Tag>
						<div className='flex justify-between mt-2 items-start flex-col xl:flex-row gap-5 w-full'>
							<MotionDiv
								variants={RevealAimation}
								viewport={{ once: true }}
								transition={{ delay: 0.2, type: 'spring' }}
								whileInView={'open'}
								initial='close'>
								<h2 className='font-bold uppercase text-2xl lg:text-3xl  mt-2'>
									{props.heading}
								</h2>
							</MotionDiv>
							<MotionDiv
								variants={RevealAimation}
								viewport={{ once: true }}
								transition={{ delay: 0.4, type: 'spring' }}
								whileInView={'open'}
								initial='close'>
								<p className='lg:prose prose-sm'>{props.description}</p>
							</MotionDiv>
						</div>
					</div>
					<ul className=' w-full'>
						{' '}
						{props.featureList?.map((b, index) => {
							return (
								<li
									key={index}
									className='mt-10 w-full '>
									<div
										data-role={b.side}
										className='flex items-center w-full flex-col-reverse lg:flex-row  justify-between gap-10 lg:data-[role=right]:flex-row-reverse'>
										<MotionDiv
											variants={RevealAimation}
											viewport={{ once: true }}
											transition={{ delay: 0.2, type: 'spring' }}
											whileInView={'open'}
											initial='close'>
											<Image
												className='drop-shadow-md'
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

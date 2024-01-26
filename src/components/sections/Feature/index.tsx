/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface FeatureProps {
	image: StaticImageData;
	side: string;
	tag: string;
	title: string;
	description: string;
}

interface AllFeatureProps{
	tag:string,
	heading:string,
	description:string,
	featureList:FeatureProps[]
}

export default function Feature(props:AllFeatureProps) {
	return (
		<div className='py-20 w-full'>
			<Container>
				<>
					<div className='flex flex-col gap-5'>
						<Tag text={'Vantagens'}></Tag>
						<div className='flex justify-between mt-2 items-start flex-col lg:flex-row gap-5'>
							<h2 className='font-bold uppercase text-2xl lg:text-3xl  mt-2'>
								{props.heading}
							</h2>
							<p className='lg:prose prose-sm'>
							{props.description}
							</p>
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
										className='flex items-start lg:items-center w-full flex-col-reverse lg:flex-row  justify-between gap-10 lg:data-[role=right]:flex-row-reverse'>
										<Image
											className='drop-shadow-md'
											width={580}
											height={240}
											src={b.image}
											alt={b.title}></Image>
										<div className='flex flex-col gap-2'>
											<Tag text={b.tag}></Tag>
											<h3 className='text-xl lg:text-2xl font-bold uppercase mt-2'>
												{b.title}
											</h3>
											<p className='prose prose-sm'>{b.description}</p>
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

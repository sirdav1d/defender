/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { Button } from '@/components/ui/button';
import { ratings } from '@/constants/ratings';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { MotionDiv } from '@/components/molecules/motionDIv';
import { RevealAimation } from '@/animations/revealAnimation';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from '@/components/ui/carousel';
import CardRating from './CardRating';

export default function Rating() {
	return (
		<>
			{/* <div className='pb-20'>
				<Container>
					<>
						<div className='flex flex-col gap-5 w-full'>
							<Tag text={'Confiança'}></Tag>
							<MotionDiv
								variants={RevealAimation}
								viewport={{ once: true }}
								transition={{ delay: 0.2, type: 'spring' }}
								whileInView={'open'}
								initial='close'>
								<h2 className='font-bold text-2xl lg:text-3xl uppercase mt-2'>
									O Que Dizem Sobre Nós
								</h2>
							</MotionDiv>
							<MotionDiv
								variants={RevealAimation}
								viewport={{ once: true }}
								transition={{ delay: 0.4, type: 'spring' }}
								whileInView={'open'}
								initial='close'>
								<p className='mb-5 lg:prose prose-sm'>
									Conheça as empresas que se tornaram parceiras de sucesso com a
									Defender Soluções em TI. Suas vozes ressoam a confiança e
									eficácia dos nossos serviços.
								</p>
							</MotionDiv>
						</div>

						<Carousel
							opts={{
								align: 'start',
								loop: true,
							}}
							className='w-full h-full mx-auto py-10 drop-shadow-none'>
							<CarouselContent className='mx-auto w-full h-full'>
								{ratings.map((r, index) => {
									return (
										<CarouselItem
											key={index}
											className=' md:basis-1/2 lg:basis-1/3 h-full '>
											<CardRating
												testimonial={r.testimonial}
												name={r.name}
												image={r.image}></CardRating>
										</CarouselItem>
									);
								})}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</>
				</Container>
			</div> */}
		</>
	);
}

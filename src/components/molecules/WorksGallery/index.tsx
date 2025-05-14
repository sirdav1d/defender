/** @format */

import React from 'react';
import { responsiveImage } from '@/lib/datocms';
import { Image } from 'react-datocms';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

interface ProjectGalleryprops {
	images: responsiveImage[];
}

export default function WorksGallery(props: ProjectGalleryprops) {
	return (
		<Carousel
			className='w-full max-w-2xl mx-auto mt-10'
			opts={{ align: 'start', loop: true }}>
			<CarouselContent>
				{props.images.map((image: any, index: number) => {
					return (
						<CarouselItem key={index}>
							<Image
								style={{ width: '368px' }}
								className='rounded-lg shadow-md h-auto object-contain pb-5 mx-auto aspect-auto'
								data={image.responsiveImage}></Image>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}

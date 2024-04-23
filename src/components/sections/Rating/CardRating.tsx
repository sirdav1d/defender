/** @format */

import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

interface CardRatingProps {
	testimonial: string;
	name: string;
	image: any;
}

export default function CardRating(props: CardRatingProps) {
	return (
		<Card className=' p-4 m-4 max-w-[368px] w-full mx-auto h-[360px]   drop-shadow-none '>
			<CardContent className='flex flex-col justify-between items-start aspect-square  w-full '>
				<div className='flex gap-1 text-brand-orange-500'>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</div>
				<p className='prose prose-sm text-start max-w-sm'>
					{props.testimonial}
				</p>
				<div className=' flex w-full justify-start items-center gap-5'>
					<div className='w-16'>
						<Image
							src={props.image}
							alt={props.name}
						/>
					</div>
					<h4 className='prose font-bold'>{props.name}</h4>
				</div>
			</CardContent>
		</Card>
	);
}

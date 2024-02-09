/** @format */

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

interface CardServsProps {
	icon: StaticImageData;
	title: string;
	description: string;
}

export default function CardServs({
	description,
	icon,
	title,
}: CardServsProps) {
	return (
		<Card className='w-full h-full md:w-[368px] md:h-[248px] bg-stone-100 rounded-none shadow-cardShadow border-none'>
			<CardHeader>
				<Image
					className='drop-shadow-icon'
					width={32}
					height={32}
					src={icon}
					alt={title}></Image>
				<CardTitle className='text-xl bg-clip-text bg-gradient-to-r from-brand-orange-500 to-brand-blue-500 text-transparent'>
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='prose prose-sm'>{description}</p>
			</CardContent>
		</Card>
	);
}

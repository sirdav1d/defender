/** @format */
'use client';

import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { responsiveImage } from '@/lib/datocms';
import { MoveRight, X } from 'lucide-react';
import { Image } from 'react-datocms';
import WorksGallery from '../WorksGallery';

interface WorksCardProps {
	client: string;
	description: string;
	coverImage: any;
	logoClient: any;
	galleryProject: responsiveImage[];
}

export default function WorksCard(props: WorksCardProps) {
	return (
		<div className='flex flex-col my-10 items-center justify-center relative max-w-[368px]'>
			<div className='w-full flex flex-col items-center justify-center py-4 gap-2'>
				<Image
					className='object-contain scale-75'
					data={props.logoClient.responsiveImage}></Image>

				<h3 className='uppercase font-bold text-xl lg:text-2xl text-center '>
					{props.client}
				</h3>

				<p className='lg:prose prose-sm text-center'>{props.description}</p>
			</div>
			<div className='bg-stone-700 w-[368px] h-[200px] relative'>
				<Image
					className='absolute mix-blend-overlay w-full h-full bg-blend-darken object-contain'
					data={props.coverImage.responsiveImage}></Image>
			</div>
			<Drawer>
				<DrawerTrigger asChild>
					<Button className='font-medium tracking-wider text-lg p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:896px_100px] group rounded-none drop-shadow-xl w-[368px]'>
						Ver Galeria
						<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
					</Button>
				</DrawerTrigger>
				<DrawerContent className='h-4/5'>
					<DrawerHeader className='flex gap-5 items-center justify-center flex-col'>
						<DrawerTitle className='text-2xl lg:text-3xl text-brand-orange-500 '>
							{props.client}
						</DrawerTitle>
						<DrawerDescription className='prose'>
							{props.description}
						</DrawerDescription>
						<DrawerClose className='absolute right-5 top-5 text-xl lg:text-2xl text-brand-orange-500 '>
							<X className='hover:scale-125 duration-200 transition-all ease-linear drop-shadow-icon' />
						</DrawerClose>
					</DrawerHeader>
					<WorksGallery images={props.galleryProject} />
				</DrawerContent>
			</Drawer>
		</div>
	);
}

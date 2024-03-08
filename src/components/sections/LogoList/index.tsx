/** @format */

import { RevealAimation } from '@/animations/revealAnimation';
import Container from '@/components/molecules/Container';
import { MotionDiv, MotionLi } from '@/components/molecules/motionDIv';
import Image, { StaticImageData } from 'next/image';

interface LogoListProps {
	list: any;
	role: string;
	title: string;
}

export default function LogoList({ list, role, title }: LogoListProps) {
	return (
		<div
			data-role={role}
			className='data-[role=partner]:py-20 data-[role=client]:pb-20'>
			<Container>
				<>
					<h2 className='text-center uppercase font-bold mb-8 text-sm lg:text-xl'>{title}</h2>
					<ul
						data-role={role}
						className={`grid lg:grid-cols-4 lg:data-[role=partner]:grid-cols-3 grid-cols-2  gap-10 items-center mx-auto w-full`}>
						{list.map((l: StaticImageData, index: number) => {
							return (
								<MotionLi
									variants={RevealAimation}
									transition={{ delay: 0.2 * index, type: 'spring' }}
									whileInView={'open'}
									initial='close'
									key={index}
									className=' flex items-center justify-center'>
									<Image
										className='grayscale hover:grayscale-0 transition-all  h-[80px] duration-200 ease-linear object-contain'
										width={200}
										height={200}
										src={l}
										alt='Logo de clientes'></Image>
								</MotionLi>
							);
						})}
					</ul>
				</>
			</Container>
		</div>
	);
}

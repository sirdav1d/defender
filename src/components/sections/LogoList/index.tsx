/** @format */

import { RevealAimation } from '@/animations/revealAnimation';
import Container from '@/components/molecules/Container';
import { MotionDiv } from '@/components/molecules/motionDIv';
import Image, { StaticImageData } from 'next/image';

interface LogoListProps {
	list: any;
	role: string;
}

export default function LogoList({ list, role }: LogoListProps) {
	return (
		<div data-role={role} className='data-[role=partner]:py-20 data-[role=client]:pb-20'>
			<Container>
				<>
					<ul
						data-role={role}
						className={`grid lg:grid-cols-4 lg:data-[role=partner]:grid-cols-3 grid-cols-2  gap-10 items-center mx-auto w-full`}>
						{list.map((l: StaticImageData, index: number) => {
							return (
								<li
									key={index}
									className=' flex items-center justify-center'>
									<MotionDiv
										variants={RevealAimation}
										transition={{ delay: 0.2 * index, type: 'spring' }}
										whileInView={'open'}
										initial='close'>
										<Image
											className='grayscale hover:grayscale-0 transition-all duration-200 ease-linear object-cover'
											width={140}
											height={140}
											src={l}
											alt='Logo de clientes'></Image>
									</MotionDiv>
								</li>
							);
						})}
					</ul>
				</>
			</Container>
		</div>
	);
}

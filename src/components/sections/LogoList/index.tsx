/** @format */

import Container from '@/components/molecules/Container';
import { logolist } from '@/constants/logolist';
import Image from 'next/image';
import React from 'react';

export default function LogoList() {
	return (
		<div className='pb-20'>
			<Container>
				<>
					<ul className='flex gap-5 justify-between items-center w-full'>
						{logolist.map((l, index) => {
							return (
								<li key={index}>
									<Image
										className='grayscale hover:grayscale-0 transition-all duration-200 ease-linear'
										width={160}
										height={80}
										src={l}
										alt='Logo de clientes'></Image>
								</li>
							);
						})}
					</ul>
					<ul className='flex gap-5 justify-between items-center w-full'>
						{logolist.map((l, index) => {
							return (
								<li key={index}>
									<Image
										className='grayscale hover:grayscale-0 transition-all duration-200 ease-linear'
										width={160}
										height={80}
										src={l}
										alt='Logo de clientes'></Image>
								</li>
							);
						})}
					</ul>
				</>
			</Container>
		</div>
	);
}

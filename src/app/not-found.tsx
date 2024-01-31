/** @format */

import Link from 'next/link';
import React from 'react';
import logo from '@/../public/logos/defender-logo.png';
import Container from '@/components/molecules/Container';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import LottieComponent from '@/components/molecules/LottieComponent';

export default function NotFound() {
	return (
		<div className='w-full h-screen  bg-stone-50 flex flex-col justify-center items-center'>
			<Container>
				<div className='flex justify-between w-full items-center h-full flex-col lg:flex-row pt-20 pb-10'>
					<div className='flex flex-col gap-5 text-stone-900 m-auto lg:w-1/2 w-full'>
						<Image
							src={logo}
							alt='Logo Defender Soluções Em TI'
							width={180}
							height={80}></Image>
						<h2 className='text-2xl lg:text-3xl uppercase font-bold'>
							Página Não Encontrada!
						</h2>
						<p className='prose text-lg'>
							Algo deu errado, clique no link abaixo e retorne a página inicial
						</p>
						<Link href='/'>
							<Button className='font-medium tracking-wider p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl text-base mt-5 lg:mt-10'>
								Retornar À Página Inicial
								<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
							</Button>
						</Link>
					</div>
					<div className='lg:w-1/2 w-full'>
						<LottieComponent />
					</div>
				</div>
			</Container>
		</div>
	);
}

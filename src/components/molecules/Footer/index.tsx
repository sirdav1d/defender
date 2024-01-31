/** @format */

import logo from '@/../public/logos/defender-logo.png';
import { siteMap } from '@/constants/siteMap';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import Container from '../Container';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
	return (
		<div
			id='contact'
			className='w-full h-full bg-brand-blue-900 pt-10'>
			<Container>
				<>
					<div className='flex w-full flex-col md:flex-row justify-between'>
						<Image
							className='mb-10'
							src={logo}
							width={200}
							height={100}
							alt='logo Sodré Revestimentos'></Image>
						<div className='flex flex-col gap-3 items-start md:items-center justify-center w-full mb-10'>
							<h2 className='uppercase tracking-wider text-stone-50 font-bold text-center m7-2'>
								Siga-nos Nas Redes Sociais
							</h2>
							<div className=' flex gap-5 items-center justify-center'>
								<a
									href='https://www.instagram.com/defenderinfo/'
									target='_blank'
									rel='noopener noreferrer'>
									<Instagram
										className='hover:text-brand-orange-500 text-brand-orange-500 transition-all duration-300 ease-in-out lg:text-stone-100'
										size={32}
									/>
								</a>

								<a
									className='hover:text-brand-orange-500 transition-all duration-300 ease-in-out text-brand-orange-500 lg:text-stone-100'
									href='#'
									target='_blank'
									rel='noopener noreferrer'>
									<FaWhatsapp size={32} />
								</a>
								<a
									href='/contact'
									rel='noopener noreferrer'>
									<Mail
										className='hover:text-brand-orange-500 transition-all duration-300 ease-in-out text-brand-orange-500 lg:text-stone-100'
										size={32}
									/>
								</a>
							</div>
						</div>
					</div>

					<div className='flex justify-between md:items-end w-full flex-col md:flex-row gap-10 lg:gap-5  items-center'>
						<div className='flex flex-col gap-10  lg:w-1/3 w-full '>
							<div className='text-brand-neutralSiga-100 flex flex-col gap-5'>
								<div className='flex flex-col gap-1'>
									<h2 className='uppercase tracking-wide text-stone-50 font-bold text-lg'>
										E-mail
									</h2>
									<p className='text-stone-200 text-sm lg:text-base'>
										ulysses@defenderinfo.com
									</p>
								</div>
								<div className='flex flex-col gap-1'>
									<h2 className='uppercase tracking-wide text-stone-50 font-bold text-lg'>
										Telefone
									</h2>
									<p className='text-stone-200 text-sm lg:text-base'>
										(21) 98378 - 0161
									</p>
								</div>
							</div>
						</div>
						<div className='grid lg:grid-cols-2  gap-4 lg:w-1/2 w-full '>
							{siteMap.map((s, index) => {
								return (
									<a
										href={s.href}
										className='text-stone-200 text-sm  hover:text-brand-orange-500 transition-all duration-300 ease-in-out '
										key={index}>
										{s.name}
									</a>
								);
							})}
						</div>
					</div>
					<div className='w-full h-[2px] rounded-full bg-brand-orange-500 my-4 lg:mt-10 lg:mb-5'></div>

					<div className='w-full text-center flex pb-5 lg:justify-center text-stone-200 uppercase tracking-wide font-bold gap-3 items-center text-[8px] lg:text-xs flex-col md:flex-row'>
						<p>
							Desenvolvido por{' '}
							<a
								className='transition-all duration-300 ease-in-out hover:text-brand-orange-500 '
								href='http://tarsprojetos.com/'
								target='_blank'
								rel='noopener noreferrer'>
								Tars Projetos LTDA
							</a>
							® 2024 - Todos os Direitos Reservados
						</p>
					</div>
				</>
			</Container>
		</div>
	);
}

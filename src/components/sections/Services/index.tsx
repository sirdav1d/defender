/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import { Button } from '@/components/ui/button';
import { servs } from '@/constants/servs';
import { MoveRight } from 'lucide-react';
import CardServs from './CardServs';
import Link from 'next/link';

export default function Services() {
	return (
		<div className='py-20 w-screen '>
			<Container>
				<>
					<div className='flex flex-col gap-5 max-w-3xl w-full mr-auto  '>
						<Tag text={'Inovação'} />
						<h2 className='font-bold text-2xl lg:text-3xl uppercase mt-2'>
							Soluções Integradas de TI
						</h2>
						<p className='mb-5 lg:prose prose-sm '>
							Integramos suporte personalizado, segurança avançada
							einfraestrutura de rede para proporcionar soluções de TI
							abrangentes e eficientes
						</p>
						<Link href={'/solutions'}>
							<Button className='font-medium tracking-wider text-lg p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl max-w-fit'>
								Ver Mais Serviços
								<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
							</Button>
						</Link>
					</div>
					<ul className='grid lg:grid-cols-3 grid-cols-1 gap-5 w-full   mt-10  mr-auto'>
						{servs.map((s, index) => {
							return (
								<li key={index}>
									<CardServs
										icon={s.icon}
										title={s.title}
										description={s.description}
									/>
								</li>
							);
						})}
					</ul>
				</>
			</Container>
		</div>
	);
}

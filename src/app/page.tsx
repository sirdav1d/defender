/** @format */

import Hero from '@/components/sections/Hero';
import bgImage from '@/../public/images/seguranca-do-computador.png';

export default function Home() {
	return (
		<div className='overflow-x-hidden min-h-screen w-screen'>
			<Hero
				img={bgImage}
				altImg={'Computador Com Cadeado'}
				heading={'Potencialize seu Negócio com a Defender Soluções em TI'}
				subHead={
					'Oferecemos suporte de alta qualidade, proteção de dados eficiente e soluções Microsoft para impulsionar o seu negócio'
				}
			/>
		</div>
	);
}

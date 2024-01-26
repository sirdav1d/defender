/** @format */

import Hero from '@/components/sections/Hero';
import bgImage from '@/../public/images/seguranca-do-computador.png';
import Services from '@/components/sections/Services';
import Who from '@/components/sections/Who';
import BenefitsList from '@/components/sections/BenefitsList';
import Rating from '@/components/sections/Rating';

export default function Home() {
	return (
		<div className='overflow-x-hidden w-full'>
			<Hero
				img={bgImage}
				altImg={'Computador Com Cadeado'}
				heading={'Potencialize seu Negócio com a Defender Soluções em TI'}
				subHead={
					'Oferecemos suporte de alta qualidade, proteção de dados eficiente e soluções Microsoft para impulsionar o seu negócio'
				}
			/>
			<Services />
			<Who />
			<BenefitsList />
			<Rating />
		</div>
	);
}

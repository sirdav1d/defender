/** @format */

import Hero from '@/components/sections/Hero';
import bgImage from '@/../public/images/seguranca-do-computador.png';
import Services from '@/components/sections/Services';
import Who from '@/components/sections/Who';
import Feature from '@/components/sections/Feature';
import Rating from '@/components/sections/Rating';
import LogoList from '@/components/sections/LogoList';
import CTA from '@/components/molecules/CTA';
import { homeFeatures } from '@/constants/homeFeatures';

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
			<Feature
				tag={'Vantagens'}
				heading={'Transformando Desafios em Vantagens Competitivas'}
				description={
					'Nossos benefícios vão além do convencional, proporcionando inovação, segurança e suporte contínuo para manter sua empresa à frente do jogo.'
				}
				featureList={homeFeatures}
			/>
			<Rating />
			<LogoList />
			<CTA />
		</div>
	);
}

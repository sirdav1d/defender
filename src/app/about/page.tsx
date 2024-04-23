/** @format */

import CTA from '@/components/molecules/CTA';
import Culture from '@/components/sections/Culture';
import Hero from '@/components/sections/Hero';
import LogoList from '@/components/sections/LogoList';
import Timeline from '@/components/sections/Timeline';
import { logolist } from '@/constants/partnerLogoList';

export default function AboutPage() {
	return (
		<div className='overflow-x-hidden w-full '>
			<Hero
				page='about'
				heading={'Inovação Guiada por Pessoas, Focada em Resultados'}
				subHead={
					'Somos uma Equipe Orientada por Pessoas, Movida por Inovação e Focada em Gerar Resultados para Nossos Clientes'
				}
			/>

			<Culture />
			<CTA />
			<Timeline />
			<LogoList
				title='Principais Parceiros'
				list={logolist}
				role={'partner'}
			/>
		</div>
	);
}

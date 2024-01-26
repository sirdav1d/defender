/** @format */

import React from 'react';
import bgImage from '@/../public/images/about-bg.png';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/molecules/CTA';
import Culture from '@/components/sections/Culture';
import Team from '@/components/sections/Team';

export default function AboutPage() {
	return (
		<div className='overflow-x-hidden w-full'>
			<Hero
				img={bgImage}
				altImg={'Casal conversando em frente a uma sala de servidores'}
				heading={'Inovação Guiada por Pessoas, Focada em Resultados'}
				subHead={
					'Somos uma Equipe Orientada por Pessoas, Movida por Inovação e Focada em Gerar Resultados para Nossos Clientes'
				}
			/>
			<Culture />
			<Team />
			<CTA />
		</div>
	);
}

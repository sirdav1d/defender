/** @format */

import React from 'react';
import bgImage from '@/../public/images/about-bg.png';
import Hero from '@/components/sections/Hero';

export default function AboutPage() {
	return (
		<div className='overflow-x-hidden min-h-screen w-screen'>
			<Hero
				img={bgImage}
				altImg={'Casal conversando em frente a uma sala de servidores'}
				heading={'Inovação Guiada por Pessoas, Focada em Resultados'}
				subHead={
					'Somos uma Equipe Orientada por Pessoas, Movida por Inovação e Focada em Gerar Resultados Significativos para Nossos Clientes'
				}
			/>
		</div>
	);
}

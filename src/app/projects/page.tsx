/** @format */

import React from 'react';
import bgImage from '@/../public/images/projects-bg.png';
import Hero from '@/components/sections/Hero';

export default function ProjectsPage() {
	return (
		<div className='overflow-x-hidden min-h-screen w-screen'>
			<Hero
				img={bgImage}
				altImg={'Cabos de Internet conectados'}
				heading={'Conquistando Desafios, Entregando Soluções'}
				subHead={
					'Descubra Como Cada Projeto Reflete Nosso Compromisso com a Inovação e Inspiração Constante para Superar Expectativas'
				}
			/>
		</div>
	);
}

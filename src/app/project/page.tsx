/** @format */
'use client';

import React from 'react';
import bgImage from '@/../public/images/projects-bg.png';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import CTA from '@/components/molecules/CTA';
import WorksList from '@/components/sections/WorksList';

export default function ProjectPage() {
	return (
		<div className='overflow-x-hidden w-full'>
			<Hero
				img={bgImage}
				altImg={'Cabos de Internet conectados'}
				heading={'Conquistando Desafios, Entregando Soluções'}
				subHead={
					'Descubra Como Cada Projeto Reflete Nosso Compromisso com a Inovação e Inspiração Constante para Superar Expectativas'
				}
			/>
			<Services />
			<WorksList />
			<CTA />
		</div>
	);
}

/** @format */

import CTA from '@/components/molecules/CTA';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WorksList from '@/components/sections/WorksList';

export default function ProjectPage() {
	return (
		<div className='overflow-x-hidden w-full'>
			<Hero
				page='projects'
				heading={'Conquistando Desafios, Entregando Soluções'}
				subHead={
					'Descubra Como Cada Projeto Reflete Nosso Compromisso com a Inovação e Inspiração Constante para Superar Expectativas'
				}
			/>
			<Services />
			<CTA />
			<WorksList />
		</div>
	);
}

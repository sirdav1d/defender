/** @format */

import React from 'react';
import bgImage from '@/../public/images/solutions-bg.png';
import Hero from '@/components/sections/Hero';

export default function SolutionsPage() {
	return (
		<div className='overflow-x-hidden min-h-screen w-screen'>
			<Hero
				img={bgImage}
				altImg={'Técnico de TI Escrevendo em Prancheta'}
				heading={'Soluções de TI Sob Medida para Seu Sucesso Empresarial'}
				subHead={
					'Inovando, Protegendo e Impulsionando Empresas por Meio da Tecnologia'
				}
			/>
		</div>
	);
}

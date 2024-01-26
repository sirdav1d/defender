/** @format */

import React from 'react';
import bgImage from '@/../public/images/solutions-bg.png';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import { solutionsFeatures } from '@/constants/solutionsFeatures';

export default function SolutionsPage() {
	return (
		<div className='overflow-x-hidden w-full'>
			<Hero
				img={bgImage}
				altImg={'Técnico de TI Escrevendo em Prancheta'}
				heading={'Soluções de TI Sob Medida para Seu Sucesso Empresarial'}
				subHead={
					'Inovando, Protegendo e Impulsionando Empresas por Meio de Soluções Tecnológicas'
				}
			/>
			<BenefitsList />
			<Feature
				tag={'experiência'}
				heading={'Explorando Nossas inovações Tecnológicas'}
				description={
					'Descubra Como Nossos Serviços Personalizados Elevam Sua Experiência Tecnológica Empresarial'
				}
				featureList={solutionsFeatures}
			/>
			<CTA />
		</div>
	);
}

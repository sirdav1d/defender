/** @format */

import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import Hero from '@/components/sections/Hero';
import LogoList from '@/components/sections/LogoList';
import Rating from '@/components/sections/Rating';
import { logolist } from '@/constants/clientsLogoList';
import { solutionsFeatures } from '@/constants/solutionsFeatures';
import React from 'react';

export default function Page() {
	return (
		<div className='overflow-x-hidden w-full '>
			<Hero
				page='solutions'
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
			<Rating />
			<LogoList
				title='Principais Clientes'
				list={logolist}
				role={'client'}
			/>
		</div>
	);
}

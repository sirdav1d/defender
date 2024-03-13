/** @format */

import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import Hero from '@/components/sections/Hero';
import LogoList from '@/components/sections/LogoList';
import Rating from '@/components/sections/Rating';
import HeroSolution from '@/components/sections/heroSolution';
import { logolist } from '@/constants/clientsLogoList';

import React from 'react';

export default function Page() {
	return (
		<div className='overflow-x-hidden w-full '>
			<HeroSolution
				title={'Transforme sua Infraestrutura com Nossa'}
				spanTitle={'Instalação de Rede de Dados'}
				subHeadLine={
					'Soluções Profissionais e Uma Infraestrutura Confíavel para Impulsionar sua Comunicação e Eficiência Empresarial'
				}
			/>
			<BenefitsList />

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

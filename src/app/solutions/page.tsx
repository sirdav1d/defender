/** @format */

import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import Hero from '@/components/sections/Hero';
import LogoList from '@/components/sections/LogoList';
import Rating from '@/components/sections/Rating';
import { logolist } from '@/constants/clientsLogoList';
import { solutionsFeatures } from '@/constants/solutionsFeatures';
import Solutions from '@/components/sections/Solutons';
import { solutions } from '@/constants/solutions';

export default function SolutionsPage() {
	return (
		<div className='overflow-x-hidden w-full'>
			<Hero
				page='solutions'
				heading={'Soluções de TI Sob Medida para Seu Sucesso Empresarial'}
				subHead={
					'Inovando, Protegendo e Impulsionando Empresas por Meio de Soluções Tecnológicas'
				}
			/>
			<BenefitsList />

			{solutions.map((s, index) => {
				return (
					<Solutions
						key={index}
						title={s.title}
						bullets={s.bullets}
						side={s.side}
						img={s.img}></Solutions>
				);
			})}
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

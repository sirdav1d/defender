/** @format */

import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import LogoList from '@/components/sections/LogoList';
import Rating from '@/components/sections/Rating';
import HeroSolution from '@/components/sections/heroSolution';
import { logolist } from '@/constants/clientsLogoList';
import { microFeatures } from '@/constants/features';


export default function Page() {
	return (
		<div className='overflow-x-hidden w-full '>
			<HeroSolution
				title={'Descubra Novas Possibilidades com '}
				spanTitle={'Microsoft 365'}
				subHeadLine={
					'Soluções Flexíveis para Empresas de Todos os Tamanhos, implantadas pela campeã em planejamento e suporte'
				}
			/>
			<BenefitsList />
			<Feature featureList={microFeatures} />

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

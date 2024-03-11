/** @format */

import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import LogoList from '@/components/sections/LogoList';
import Rating from '@/components/sections/Rating';
import { logolist } from '@/constants/clientsLogoList';
import { supFeatures } from '@/constants/supFeatures';
import HeroSolution from '../../../components/sections/heroSolution';

export default function Page() {
	return (
		<div className='overflow-x-hidden w-full '>
			<HeroSolution />
			<BenefitsList />
			<Feature
				tag={'experiência'}
				heading={'Explorando Nossas inovações Tecnológicas'}
				description={
					'Descubra Como Nossos Serviços Personalizados Elevam Sua Experiência Tecnológica Empresarial'
				}
				featureList={supFeatures}
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

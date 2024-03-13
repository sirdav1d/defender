/** @format */

import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import LogoList from '@/components/sections/LogoList';
import Rating from '@/components/sections/Rating';
import { logolist } from '@/constants/clientsLogoList';
import { supFeatures } from '@/constants/features';
import HeroSolution from '../../../components/sections/heroSolution';

export default function Page() {
	return (
		<div className='overflow-x-hidden w-full '>
			<HeroSolution
				title={'Transforme Desafios Em Oportunidades Com Nosso'}
				spanTitle={'Suporte TI'}
				subHeadLine={
					'Soluções tecnológicas e sob medida para sua sua Equipe para se Concentrar em Prioridades Estratégicas e alcançar novos patamares'
				}
			/>
			<BenefitsList />
			<Feature featureList={supFeatures} />
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

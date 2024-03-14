/** @format */

import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import LogoList from '@/components/sections/LogoList';
import Rating from '@/components/sections/Rating';
import HeroSolution from '@/components/sections/heroSolution';
import { logolist } from '@/constants/clientsLogoList';
import { secFeatures } from '@/constants/features';

export default function Page() {
	return (
		<div className='overflow-x-hidden w-full '>
			<HeroSolution
				title={'Proteja sua Empresa com Soluções de '}
				spanTitle={'Segurança Eletrônica'}
				subHeadLine={
					'Nossos Sistemas Avançados de Vigilância e Monitoramento proporcionam sua Tranquilidade e Segurança'
				}
			/>
			<BenefitsList />
			<Feature featureList={secFeatures} />

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

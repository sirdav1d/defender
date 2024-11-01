/** @format */

import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import LogoList from '@/components/sections/LogoList';
import Rating from '@/components/sections/Rating';
import HeroSolution from '@/components/sections/heroSolution';
import { logolist } from '@/constants/clientsLogoList';
import { fireFeatures } from '@/constants/features';

export default function Page() {
	return (
		<div className='overflow-x-hidden w-full '>
			<HeroSolution
				title={'Proteja sua Empresa Com Nossa'}
				spanTitle={'Segurança de Rede'}
				subHeadLine={
					'Soluções De Firewall Avançado e Medidas de Segurança para Defender sua Rede de Ameaças Cibernéticas'
				}
			/>
			<BenefitsList />
			<Feature featureList={fireFeatures} />
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

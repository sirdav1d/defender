/** @format */

import CTA from '@/components/molecules/CTA';
import BenefitsList from '@/components/sections/BenefitsList';
import Feature from '@/components/sections/Feature';
import LogoList from '@/components/sections/LogoList';
import Rating from '@/components/sections/Rating';
import HeroSolution from '@/components/sections/heroSolution';
import { logolist } from '@/constants/clientsLogoList';
import { instFeatures } from '@/constants/features';


export default function Page() {
	return (
		<div className='overflow-x-hidden w-full '>
			<HeroSolution
				title={'Transforme sua operação com Nossa'}
				spanTitle={'Instalação de Rede de Dados'}
				subHeadLine={
					'Velocidade, Segurança e Estabilidade para uma Comunicação Sem Interrupções na sua Empresa'
				}
			/>
			<BenefitsList />
			<Feature featureList={instFeatures} />
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

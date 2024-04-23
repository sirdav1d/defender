/** @format */

import CTA from '@/components/molecules/CTA';
import Hero from '@/components/sections/Hero';
import LogoList from '@/components/sections/LogoList';
import ProjectsCall from '@/components/sections/ProjectsCall';
import Rating from '@/components/sections/Rating';
import Services from '@/components/sections/Services';
import { logolist } from '@/constants/clientsLogoList';

export default function Home() {
	return (
		<div className='overflow-x-hidden w-full'>
			<>
				<Hero
					page='home'
					heading={'Potencialize seu Negócio com a Defender Soluções em TI'}
					subHead={
						'Oferecemos Suporte TI para Empresas, Proteção De Dados, Soluções Microsoft, Segurança de redes com Firewall, Instalação de Redes (Cabo e WI-FI) e Sistemas de Segurança Eletrônica'
					}
				/>
				<Services />
				<ProjectsCall />
				{/* <Who /> */}
				{/* <Feature
					tag={'Vantagens'}
					heading={'Transformando Desafios em Vantagens Competitivas'}
					description={
						'Nossos benefícios vão além do convencional, proporcionando inovação, segurança e suporte contínuo para manter sua empresa à frente do jogo.'
					}
					featureList={homeFeatures}
				/> */}
				<CTA />
				<Rating />
				<LogoList
					title='Principais Clientes'
					list={logolist}
					role={'client'}
				/>
			</>
		</div>
	);
}

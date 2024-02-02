/** @format */

import bgImage from '@/../public/images/contact-bg.png';
import ContactInfo from '@/components/sections/ContactInfo';
import Hero from '@/components/sections/Hero';

export default function ContactPage() {
	return (
		<div className='overflow-x-hidden w-full'>
			<Hero
				img={bgImage}
				altImg={'Homem falando no celular'}
				heading={'Nosso Time Está Pronto para Atender Você'}
				subHead={
					'Entre em Contato e Descubra Como Podemos Fortalecer Sua Presença Digital e Impulsionar Seu Sucesso'
				}
			/>
			<ContactInfo />
		</div>
	);
}

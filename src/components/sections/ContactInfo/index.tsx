/** @format */

import Container from '@/components/molecules/Container';
import FormComponent from '@/components/molecules/FormComponent';
import Tag from '@/components/molecules/Tag';
import React from 'react';

export default function ContactInfo() {
	return (
		<div className='py-20'>
			<Container>
				<>
					<div className='flex w-full justify-between items-baseline flex-col gap-10 lg:gap-0 lg:flex-row'>
						<div className='lg:w-1/2 justify-between flex flex-col  '>
							<div className='flex flex-col gap-5 '>
								<Tag text={'iniciativa'}></Tag>
								<h2 className='font-bold uppercase text-2xl lg:text-3xl  mt-2'>
									Explore Oportunidades de Colaboração
								</h2>
								<p className='lg:prose prose-sm'>
									Estamos abertos a parcerias e colaborações. Preencha nosso
									formulário para iniciar uma conversa sobre como podemos
									trabalhar juntos para alcançar seus objetivos tecnológicos
								</p>
							</div>
							<div className='flex flex-col mt-10 gap-5'>
								<h3 className='font-bold text-xl uppercase'>
									Se Preferir, entre em contato diretamente
								</h3>
								<div className='flex w-full justify-between items-center'>
									<div className='flex flex-col gap-3'>
										<h4 className='uppercase font-bold text-base lg:text-lg'>
											E-mail
										</h4>
										<p className='prose prose-sm'>ulysses@defenderinfo.com</p>
									</div>
									<div className='flex flex-col gap-3'>
										<h4 className='uppercase font-bold text-base lg:text-lg'>
											Telefone
										</h4>
										<p className='prose prose-sm'>(21) 98378 - 0161</p>
									</div>
								</div>
							</div>
						</div>

						<div className='lg:w-1/2 w-full flex items-end justify-center lg:justify-end '>
							<FormComponent />
						</div>
					</div>
				</>
			</Container>
		</div>
	);
}

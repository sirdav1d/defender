/** @format */

import Container from '@/components/molecules/Container';
import Tag from '@/components/molecules/Tag';
import React from 'react';

export default function Team() {
	return (
		<div className='w-full pb-20'>
			<Container>
				<>
					<div className='w-full flex items-start flex-col gap-5'>
						<Tag text={'comunidade'} />
						<h2 className='mt-2 uppercase font-bold text-2xl lg:text-3xl'>
							Nosso Time, Sua Garantia de Excelência
						</h2>
						<p className='prose prose-sm lg:prose-lg'>
							Conheça as Mentes Brilhantes que Compõem a Defender. Nossa Equipe,
							com Expertise e Paixão, É a Chave para Desbloquear Soluções
							Tecnológicas Excepcionais
						</p>
					</div>
					<ul> </ul>
				</>
			</Container>
		</div>
	);
}

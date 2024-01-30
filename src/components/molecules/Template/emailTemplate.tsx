/** @format */

import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import React from 'react';

interface EmailTemplateProps {
	fullName: string;
	email?: string;
	cel?: string;
	message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	fullName,
	cel,
	email,
	message,
}) => (
	<Html>
		<Head />
		<Preview>Você Recebeu Um Novo Lead!</Preview>
		<Tailwind>
			<Body className='bg-stone-200 text-stone-900 p-8'>
				<Container>
					<Section className='bg-stone-50 border border-stone-950/80 rounded-lg p-6'>
						<Heading className='text-center'>
							{fullName} Preencheu O Formulário Em Seu Website, Confira Os Dados
							Enviados Abaixo:
						</Heading>
						<Hr />
						<Text>{fullName}</Text>
						<Text>{email}</Text>
						<Text>{cel}</Text>
						<Hr />
						<Text>{message}</Text>
						<Hr />
						<Text>Retornaremos em breve com novidades</Text>
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);

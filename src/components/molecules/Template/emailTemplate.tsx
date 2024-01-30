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
			<Body>
				<Container>
					<Section>
						<Heading className='text-center'>
							{fullName} Acabou de Preencher O Formulário, Confira Os Dados
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

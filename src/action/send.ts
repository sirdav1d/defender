/** @format */

'use server';

import { EmailTemplate } from '@/components/molecules/Template/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
	message: string;
	email: string;
	name: string;
	cel: string;
}

export async function sendEmail(values: SendEmailProps) {
	const senderEmail = values.email;
	const message = values.message;
	const fullname = values.name;
	const cel = values.cel;

	try {
		const data = await resend.emails.send({
			from: 'Website Institucional - Defender <onboarding@resend.dev>',
			to: 'ulysses@defenderinfo.com',
			subject: 'Um Novo Lead Chegou do Seu Site',
			react: EmailTemplate({
				fullName: fullname,
				cel: cel,
				email: senderEmail,
				message: message,
			}),
			text: '',
		});
		console.log({ data });
	} catch (err) {
		console.log(err);
	}
}

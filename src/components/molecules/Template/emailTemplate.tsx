/** @format */

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
	<div className='w-full h-full p-5 flex justify-center flex-col items-center gap-4'>
		<h2 className='text-stone-900 font-bold text-3xl'>
			Parabéns Por Mais Um Lead
		</h2>
		<br />
		<br />
		<h3 className='font-bold text-stone-700 text-xl'>
			Confira os Dados Abaixo:
		</h3>
		<div className='flex flex-col gap-2 items-center justify-center'>
			<p>{fullName}</p>
			<p>{email}</p>
			<p>{cel}</p>
			<br />
			<p>{message}</p>
		</div>
	</div>
);

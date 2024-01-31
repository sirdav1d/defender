/** @format */
import * as z from 'zod';

export const formSchema = z.object({
	email: z.string({ required_error: 'O e-mail é obrigatório' }).email({
		message: 'Digite um e-mail válido',
	}),
	name: z.string({ required_error: 'O nome é obrigatório' }).min(3, {
		message: 'O nome precisa ter mais de 3 caracteres',
	}),
	cel: z
		.string({ required_error: 'O telefone é obrigatório' })
		.regex(
			/^((1|4|5|8|9)[0-9])|(2(1|2|4|7|8))|(3([1-5]|[7-8]))(5(1|[3-5]))(7(1|9|[3-7]))/,
			{
				message: 'Digite um Telefone válido',
			},
		),
	message: z.string().max(90),
	consent: z
		.boolean({
			required_error:
				'Você Precisa Aceitar os Termos e Políticas Para Prosseguir',
		})
		.default(false),
});

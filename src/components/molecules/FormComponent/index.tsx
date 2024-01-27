/** @format */

'use client';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { MoveRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
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
});

function onSubmit(values: z.infer<typeof formSchema>) {
	// Do something with the form values.
	// ✅ This will be type-safe and validated.
	console.log(values);
}

export default function FormComponent() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			name: '',
			cel: '',
		},
	});

	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='border border-brand-orange-500/20 shadow-cardShadow flex flex-col bg-stone-50 items-center p-10 justify-center gap-10 w-full max-w-[368px] lg:max-w-[480px]'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem className='w-full flex flex-col gap-3'>
								<FormLabel className='uppercase font-bold text-base'>
									E-mail:
								</FormLabel>
								<FormControl>
									<Input
										className='bg-stone-100 border-b border-brand-orange-500 focus-visible:ring-1 focus-visible:ring-brand-orange-300'
										placeholder='Digite Seu E-mail'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem className='w-full flex flex-col gap-3'>
								<FormLabel className='uppercase font-bold text-base'>
									Nome Completo:
								</FormLabel>
								<FormControl>
									<Input
										className='bg-stone-100 border-b border-brand-orange-500 focus-visible:ring-1 focus-visible:ring-brand-orange-300'
										placeholder='Digite Seu Nome Completo'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='cel'
						render={({ field }) => (
							<FormItem className='w-full flex flex-col gap-3'>
								<FormLabel className='uppercase font-bold text-base'>
									Telefone:
								</FormLabel>
								<FormControl>
									<Input
										className='bg-stone-100 border-b border-brand-orange-500 focus-visible:ring-1 focus-visible:ring-brand-orange-300'
										placeholder='Digite Seu Telefone'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className='font-medium tracking-wider text-lg p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:696px_100px] group rounded-none drop-shadow-xl'
						type='submit'>
						Enviar Mensagem
						<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
					</Button>
				</form>
			</Form>
		</div>
	);
}

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
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/helpers/formSchemahelper';
import { zodResolver } from '@hookform/resolvers/zod';
import { MoveRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';

export default function FormComponent() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			name: '',
			cel: '',
			message: '',
		},
	});
	const { toast } = useToast();

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.

		console.log(values);
	}

	return (
		<div className=' w-full flex justify-center lg:justify-end'>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='border border-brand-orange-500/20 shadow-cardShadow flex flex-col bg-stone-50 items-center py-5 px-10 justify-center gap-10 w-full max-w-[368px] lg:max-w-[480px]'>
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
										required
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
										required
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
								<FormLabel
									aria-required
									className='uppercase font-bold text-base'>
									Telefone:
								</FormLabel>
								<FormControl>
									<Input
										required
										className='bg-stone-100 border-b border-brand-orange-500 focus-visible:ring-1 focus-visible:ring-brand-orange-300'
										placeholder='Digite Seu Telefone'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem className='w-full flex flex-col gap-3'>
								<FormLabel className='uppercase font-bold text-base'>
									Mensagem:
								</FormLabel>
								<FormControl>
									<Textarea
										className='bg-stone-100 border-b border-brand-orange-500 focus-visible:ring-1 focus-visible:ring-brand-orange-300'
										placeholder='Digite Sua Mensagem'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className='font-medium w-full tracking-wider text-lg p-8 flex gap-4 bg-bgButtomOrange bg-left transition-all duration-200 ease-linear hover:bg-right bg-[length:896px_100px] group rounded-none drop-shadow-xl'
						type='submit'>
						Enviar Mensagem
						<MoveRight className='transition-all duration-300 ease-linear group-hover:translate-x-2' />
					</Button>
				</form>
			</Form>
		</div>
	);
}

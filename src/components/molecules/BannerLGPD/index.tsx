/** @format */

'use client';

import { useToast } from '@/components/ui/use-toast';
import { getLocalStorage, setLocalStorage } from '@/helpers/storageHelper';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BannerLGPD() {
	const [cookieConsent, setCookieConsent] = useState(false);
	const [canSHow, setCanShow] = useState(true);

	useEffect(() => {
		const storedCookieConsent = getLocalStorage('cookie_consent', null);
		setCookieConsent(storedCookieConsent);
	}, [setCookieConsent]);

	useEffect(() => {
		const newValue = cookieConsent ? 'granted' : 'denied';
		if (cookieConsent) {
			setCanShow(false);
		} else {
			setCanShow(true);
		}

		// gtag('consent', 'update', {
		// 	analytics_storage: newValue,
		// 	ad_user_data: newValue,
		// 	ad_personalization: newValue,
		// });

		setLocalStorage('cookie_consent', cookieConsent);
		console.log(cookieConsent);
	}, [cookieConsent, setCookieConsent]);

	async function handleAccept() {
		setCanShow(false);
		setCookieConsent(true);
	}

	const { toast } = useToast();

	function handleDeny() {
		setCanShow(true);
		setCookieConsent(false);
		toast({
			title: 'Experiência de Usuário',
			description:
				'Para ter uma melhor experiência como usuário, recomendamos que aceite nossas políticas de privacidade e termos de uso',
			variant: 'destructive',
		});
	}

	return (
		<AnimatePresence mode='wait'>
			{canSHow && (
				<motion.div
					animate={{
						y: 0,
						opacity: 1,
						transition: { duration: 0.3, delay: 0.8 },
					}}
					initial={{ y: -80, opacity: 0 }}
					exit={{ y: 80, opacity: 0, transition: { duration: 0.3 } }}
					className={`fixed bottom-0 center 'flex'   items-center w-full mx-auto h-fit text-brand-neutral-100 text-xs lg:text-sm p-3  z-[99999999999999999999]`}>
					<div className=' max-w-[1024px]  rounded-lg gap-1 lg:gap-5 shadow-lg flex flex-col lg:flex-row justify-center items-center mx-auto p-5 bg-stone-50/70 backdrop-blur-sm lg:py-8 lg:px-8 text-stone-50'>
						<p className='prose-xs text-stone-900 drop-shadow-sm'>
							Nós utilizamos cookies para melhorar sua experiência como usuário.
							Para conferir detalhadamente nossas boas práticas, acesse nossas{' '}
							<a
								className='hover:text-brand-orange-700 transition duration-300 underline'
								href='/politics'>
								Políticas de Privacidade
							</a>{' '}
							e{' '}
							<a
								className='hover:text-brand-orange-700  transition duration-300 underline'
								href='/terms'>
								Termos de uso
							</a>
							.
						</p>
						<div className='gap-3 lg:gap-5 flex justify-center items-center mx-auto'>
							<button
								onClick={() => handleAccept()}
								type='button'
								className={`w-fit px-4 py-2 lg:w-28 lg:h-12 bg-brand-orange-700 rounded-full   z-50 disabled:grayscale disabled:hover:grayscale flex gap-2 items-center justify-center text-center hover:bg-brand-orange-500  transition duration-300 mt-3 lg:text-base text-xs font-bold tracking-wide`}>
								<p className='flex gap-3 items-center justify-center drop-shadow-md '>
									Aceitar
								</p>
							</button>
							<button
								onClick={() => handleDeny()}
								type='button'
								className={`flex items-center justify-center w-fit text-center drop-shadow-md hover:opacity-80 text-stone-800 hover:text-brand-orange-700  transition duration-300 mt-3 lg:text-base text-xs font-bold tracking-wide`}>
								<p className='flex gap-3 items-center justify-center underline '>
									Recusar
								</p>
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

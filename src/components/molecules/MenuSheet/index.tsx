/** @format */

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetClose,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Navigation from '../Navigation';
import Image from 'next/image';
import logo from '@/../public/logos/defender-logo.png'

export default function MenuSheet() {
	return (
		<div className='block lg:hidden'>
			<Sheet>
				<SheetTrigger className='text-stone-100'>
					<AlignJustify
						color='white'
						size={40}
					/>
				</SheetTrigger>
				<SheetContent className='bg-stone-900 flex flex-col justify-between items-center text-stone-50'>
					<SheetHeader className='text-stone-100'>
						<SheetTitle className='text-stone-100 text-xl mt-5'>
							<Image src={logo} alt='logo Defender Soluções em TI' width={180} height={80}/>
						</SheetTitle>
					</SheetHeader>
					<Navigation />
					<Button className='bg-emerald-700'>Chamar Agora</Button>
				</SheetContent>
			</Sheet>
		</div>
	);
}

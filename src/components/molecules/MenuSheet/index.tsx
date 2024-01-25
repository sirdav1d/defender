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
						<SheetTitle className='text-stone-100 text-base mt-5'>
							<span className='text-brand-orange-500 text-lg'>Defender</span>{' '}
							Soluções Em TI
						</SheetTitle>
					</SheetHeader>
					<Navigation />
					<Button className='bg-emerald-700'>Chamar Agora</Button>
				</SheetContent>
			</Sheet>
		</div>
	);
}

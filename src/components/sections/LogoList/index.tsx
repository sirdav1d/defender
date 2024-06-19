/** @format */

import Container from '@/components/molecules/Container';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { StaticImageData } from 'next/image';

interface LogoListProps {
	list: StaticImageData[];
	role: string;
	title: string;
}

export default function LogoList({ list, role, title }: LogoListProps) {
	return (
		<div
			data-role={role}
			className='data-[role=partner]:py-20 data-[role=client]:pb-20 border w-full'>
		
				<>
					<h2 className='text-center uppercase font-bold mb-8 text-sm lg:text-xl'>
						{title}
					</h2>
					<InfiniteMovingCards
						items={list}
						direction='right'
						speed='slow'></InfiniteMovingCards>
				</>
		
		</div>
	);
}

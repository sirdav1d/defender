/** @format */

import Navigation from '../Navigation';
import Container from '../Container';
import Image from 'next/image';
import logo from '@/../public/logos/defender-logo.png';
import MenuSheet from '../MenuSheet';

export default function Header() {
	return (
		<div className='z-50 bg-black/40 backdrop-blur-sm w-full fixed py-5 '>
			<Container>
				<>
					<div className='flex justify-between items-center w-full '>
						<a href='/'>
							<Image
								width={180}
								height={60}
								src={logo}
								alt='Logo Defender Soluções Em TI'
							/>
						</a>
						<div className='hidden lg:flex border-l-brand-orange-500'>
							<Navigation />
						</div>
						<MenuSheet />
					</div>
				</>
			</Container>
		</div>
	);
}

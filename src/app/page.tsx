/** @format */

import { Button } from '@/components/ui/button';

export default function Home() {
  
	return (
		<div className='flex w-screen min-h-screen justify-center items-center flex-col gap-10'>
			<h1>Hello world</h1>
			<Button variant='outline' className='tracking-wider'>Button</Button>
		</div>
	);
}

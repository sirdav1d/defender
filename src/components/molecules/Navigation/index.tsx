/** @format */

'use client';

import {
	ListItem,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { links, solutions } from '@/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
	const path = usePathname();

	return (
		<>
			<NavigationMenu>
				<NavigationMenuList className='gap-3 text-stone-700 font-semibold flex flex-col lg:flex-row uppercase'>
					<NavigationMenuItem
						className={`${
							path === links.Home.href
								? 'text-brand-orange-500'
								: 'text-stone-700'
						} hover:text-brand-orange-500 transition-all ease-in-out duration-200`}>
						<Link
							href={links.Home.href}
							legacyBehavior
							passHref>
							<NavigationMenuLink className='hover:text-brand-orange-500 group transition-all duration-200 ease-in-out text-xl lg:text-base flex flex-col'>
								{links.Home.label}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem
						className={`${
							path === links.About.href
								? 'text-brand-orange-500'
								: 'text-stone-700'
						} hover:text-brand-orange-500 transition-all ease-in-out duration-200`}>
						<Link
							href={links.About.href}
							legacyBehavior
							passHref>
							<NavigationMenuLink className='hover:text-brand-orange-500 group transition-all duration-200 ease-in-out text-xl lg:text-base flex flex-col'>
								{links.About.label}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem
						className={`${
							path === links.Solutions.href
								? 'text-brand-orange-500'
								: 'text-stone-700'
						} hover:text-brand-orange-500 transition-all ease-in-out duration-200`}>
						<NavigationMenuTrigger className='p-0'>
							<Link
								href={links.Solutions.href}
								legacyBehavior
								passHref>
								<NavigationMenuLink className='hover:text-brand-orange-500 group transition-all duration-200 ease-in-out text-xl lg:text-base flex flex-col'>
									{links.Solutions.label}
								</NavigationMenuLink>
							</Link>
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
								{solutions.map((s, index) => {
									return (
										<li
											key={index}
											className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
											<Link
												href={s.href}
												legacyBehavior
												passHref>
												<NavigationMenuLink className='hover:text-brand-orange-500 group transition-all duration-200 ease-in-out text-xl lg:text-sm flex flex-col'>
													<div className='text-sm font-bold leading-none uppercase flex items-center justify-start gap-2'>
														<Image
															src={s.icon}
															alt={s.nameLink}
															width={20}
															height={20}></Image>
														{s.nameLink}
													</div>
													<p className='line-clamp-2 text-sm leading-snug text-muted-foreground mt-2'>
														{s.description}
													</p>
												</NavigationMenuLink>
											</Link>
										</li>
									);
								})}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem
						className={`${
							path === links.Projects.href
								? 'text-brand-orange-500'
								: 'text-stone-700'
						} hover:text-brand-orange-500 transition-all ease-in-out duration-200`}>
						<Link
							href={links.Projects.href}
							legacyBehavior
							passHref>
							<NavigationMenuLink className='hover:text-brand-orange-500 group transition-all duration-200 ease-in-out text-xl lg:text-base flex flex-col'>
								{links.Projects.label}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem
						className={`${
							path === links.Contact.href
								? 'text-brand-orange-500'
								: 'text-stone-700'
						} hover:text-brand-orange-500 transition-all ease-in-out duration-200`}>
						<Link
							href={links.Contact.href}
							legacyBehavior
							passHref>
							<NavigationMenuLink className='hover:text-brand-orange-500 group transition-all duration-200 ease-in-out text-xl lg:text-base flex flex-col'>
								{links.Contact.label}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
}

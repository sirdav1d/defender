/** @format */

'use client';

import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: {
	items: StaticImageData[];
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards',
				);
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse',
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s');
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s');
			} else {
				containerRef.current.style.setProperty('--animation-duration', '80s');
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
				className,
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap items-center',
					start && 'animate-scroll ',
					pauseOnHover && 'hover:[animation-play-state:paused]',
				)}>
				{items.map((item, index) => (
					<li
						className='w-fit relative rounded-2xl flex-shrink-0 px-8 py-6 flex items-center'
						style={{
							background:
								'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
						}}
						key={index}>
						<div className='relative z-20 flex flex-row items-center '>
							<Image
								src={item}
								alt='Logo'
								width={320}
								height={60}
								className='object-scale-down'></Image>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

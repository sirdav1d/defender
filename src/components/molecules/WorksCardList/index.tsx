/** @format */
'use client';

import React, { useEffect, useState } from 'react';
import { useQuerySubscription } from 'react-datocms';
import { allDefenderProjects } from '@/lib/datocms';
import Container from '@/components/molecules/Container';
import WorksCard from '../WorksCard';
import { RevealAimation } from '@/animations/revealAnimation';
import { MotionDiv } from '@/components/molecules/motionDIv';

export default function WorksCardList({ subscription }: { subscription: any }) {
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => setHydrated(true), []);
	const { query, initialData, token } = subscription;

	const { data, error, status } = useQuerySubscription({
		query: query,
		enabled: true,
		token,
		initialData,
	});

	const projects: allDefenderProjects[] = data.allDefenderProjects;

	return (
		hydrated && (
			<div>
				<Container>
					<ul className='grid grid-cols-1 lg:grid-cols-2 w-full md:gap-10 items-end'>
						{projects.map((p, index) => {
							return (
								<MotionDiv
									variants={RevealAimation}
									viewport={{ once: true }}
									transition={{ delay: 0.2 * index, type: 'spring' }}
									whileInView={'open'}
									key={index}
									initial='close'>
									<WorksCard
										client={p.client}
										description={p.description}
										coverImage={p.coverImage}
										logoClient={p.logoClient}
										galleryProject={p.galleryProject}
									/>
								</MotionDiv>
							);
						})}
					</ul>
				</Container>
			</div>
		)
	);
}

/** @format */
'use server';

import { gql, GraphQLClient } from 'graphql-request';

interface RequestProps {
	query: string;
	variables?: any;
	revalidate: number;
}

export function request({ query, variables, revalidate }: RequestProps) {
	const endpoint = process.env.NEXT_DATOCMS_ENDPOINT || '';
	const token = process.env.NEXT_DATOCMS_TOKEN;
	const graphQLClient = new GraphQLClient(endpoint, {
		method: 'POST',
		next: { revalidate: revalidate },
		headers: {
			authorization: `Bearer ${token}`,
		},
	});

	return graphQLClient.request(query, variables);
}

export const queryGallery = gql`
	query {
		allDefenderProjects {
			id
			client
			description
			coverImage {
				responsiveImage {
					alt
					aspectRatio
					base64
					bgColor
					height
					sizes
					src
					srcSet
					title
					webpSrcSet
					width
					__typename
				}
			}
			logoClient {
				responsiveImage {
					alt
					aspectRatio
					base64
					bgColor
					height
					sizes
					src
					srcSet
					title
					webpSrcSet
					width
					__typename
				}
			}
			galleryProject {
				responsiveImage {
					alt
					aspectRatio
					base64
					bgColor
					height
					sizes
					src
					srcSet
					title
					webpSrcSet
					width
					__typename
				}
			}
		}
	}
`;

export interface responsiveImage {
	alt: string | null;
	aspectRatio: number;
	base64: string;
	height: number;
	sizes: string;
	src: string;
	srcSet: string;
	title: string | null;
	webpSrcSet: string;
	width: number;
	__typename: string;
}

export interface allDefenderProjects {
	id: string;
	client: string;
	description: string;
	coverImage: {
		responsiveImage: responsiveImage;
	};
	logoClient: {
		responsiveImage: responsiveImage;
	};
	galleryProject: [responsiveImage: responsiveImage];
}

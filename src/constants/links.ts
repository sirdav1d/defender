/** @format */

import supIcon from '@/../public/icons/apoio-suporte.png';
import protecIcon from '@/../public/icons/protecao-de-dados.png';
import fireIcon from '@/../public/icons/firewall.png';
import wifiIcon from '@/../public/icons/sinal-wifi.png';
import recIcon from '@/../public/icons/escritorio.png';
import secIcon from '@/../public/icons/camera-de-cftv.png';

export const links = {
	Home: {
		label: 'Home',
		href: '/',
	},
	About: {
		label: 'Sobre Nós',
		href: '/about',
	},
	Solutions: {
		label: 'Soluções',
		href: '/solutions',
	},
	Projects: {
		label: 'Projetos',
		href: '/project',
	},
	Contact: {
		label: 'Contato',
		href: '/contact',
	},
};

export const solutions: {
	nameLink: string;
	href: string;
	description?: string;
	icon: any;
}[] = [
	{
		nameLink: 'Suporte TI',
		href: '/solutions/suport',
		description:
			'Mantenha-se operacional o tempo todo com nosso suporte corporativo',
		icon: supIcon,
	},

	{
		nameLink: 'Proteção De Dados',
		href: '/solutions/protect',
		description:
			'Salve e guarde informações cruciais com nossa proteção avançada de dados',
		icon: protecIcon,
	},
	{
		nameLink: 'Segurança De Rede',
		href: '/solutions/firewall',
		description:
			'Garanta a defesa da sua infraestrutura com nossa segurança de redes',
		icon: fireIcon,
	},
	{
		nameLink: 'Instalação De Rede',
		href: '/solutions/install',
		description:
			'Mantenha sua equipe conectada com nossa infraestrutura de rede Wi-Fi corporativa',
		icon: wifiIcon,
	},
	{
		nameLink: 'Soluções Microsoft',
		href: '/solutions/microsoft',
		description:
			'A Microsoft oferece serviços que abrangem desde apps de produtividade à soluções em nuvem',
		icon: recIcon,
	},
	{
		nameLink: 'Segurança Eletrônica',
		href: '/solutions/security',
		description:
			'Oferecemos soluções de sistemas avançados de monitoramento de CFTV',
		icon: secIcon,
	},
];

export const linksMobile = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Sobre Nós',
		href: '/about',
	},
	{
		label: 'Soluções',
		href: '/solutions',
	},
	{
		label: 'Projetos',
		href: '/project',
	},
	{
		label: 'Contato',
		href: '/contact',
	},
];

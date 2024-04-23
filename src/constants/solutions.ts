/** @format */

import supImage from '@/../public/images/solutions/standard-quality-control-concept-m 1.png';
import protImage from '@/../public/images/solutions/empresario-fazendo-login-em-seu-tablet 1.png';
import fireImage from '@/../public/images/solutions/firewall.png';
import installImage from '@/../public/images/solutions/network-switch-with-cables 1.png';
import microsoftImage from '@/../public/images/solutions/microsoft-solutions.png';
import secImage from '@/../public/images/solutions/cctv-security-technology-with-lock-icon-digital-remix 1.png';

export const solutions = [
	{
		title: 'Suporte TI Para Empresas',
		side: 'left',
		bullets: [
			'Atendimento remoto ilimitado',
			'Antivirus gerenciado',
			'Monitoramento remoto proativo 24/7',
			'Atendimento presencial',
			'Manutenção preventiva automatizada',
		],
		img: supImage,
		href: '/solutions/suport',
	},
	{
		title: 'Proteção de Dados',
		side: 'right',
		bullets: [
			'Backup e recuperação de dados em nuvem',
			'Redução de custos operacionais',
			'Implantação de rotinas de cópias de dados',
			'Backup monitorado e automatizado',
			'Backup de dados Microsoft 365',
		],
		img: protImage,
		href: '/solutions/protect',
	},
	{
		title: 'Segurança De Rede (FIREWALL)',
		side: 'left',
		bullets: [
			'Proteção contra ameaças cibernéticas',
			'Monitoramento de rede em tempo real',
			'Acesso remoto seguro (VPN)',
			'Gerenciamento e controle de acesso à internet',
			'Gerenciamento de provedores de internet',
		],
		img: fireImage,
		href: '/solutions/firewall',
	},
	{
		title: 'Instalação De Rede De Dados',
		side: 'right',
		bullets: [
			'Instalação de rede cabeada - Cabeamento Estruturado',
			'Instalação de rede WI-FI de alta performance',
			'Planejamento de infraestrutura',
			'Conectorização e identificação de rede',
			'Instalação e configuração de equipamentos de rede',
		],
		img: installImage,
		href: '/solutions/install',
	},
	{
		title: 'Soluções Microsoft',
		side: 'left',
		bullets: [
			'Implantação de aplicativos de produtividade em nuvem (Microsoft 365)',
			'Configuração de e-mail corporativo',
			'Compartilhamento de arquivos em nuvem',
			'Implantação de serviços no Microsoft Azure',
			'Instalação de servidores Windows',
		],
		img: microsoftImage,
		href: '/solutions/microsoft',
	},
	{
		title: 'Segurança Eletrõnica',
		side: 'right',
		bullets: [
			'Planejamento de infraestrutura de CFTV',
			'Instalação de sistemas de CFTV',
			'Instalação de sistemas de controle de acesso',
			'Instalação e configuração de softwares de monitoramento',
			'Integração com sistema de controle de acesso',
		],
		img: secImage,
		href: '/solutions/security',
	},
];

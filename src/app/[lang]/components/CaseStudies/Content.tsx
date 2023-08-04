'use client';
import Container from '@/components/Container';
import { ILanguageProps } from '@/lib/types';
import { FC, useState } from 'react';
import MenuItem from './MenuItem';
import { homepage } from '@public/locales/homepage';
import Manufacture from '@public/assets/icon/CaseStudies/Manufacture';
import Fintech from '@public/assets/icon/CaseStudies/Fintech';
import HealthCare from '@public/assets/icon/CaseStudies/HealthCare';
import Logistic from '@public/assets/icon/CaseStudies/Logistic';
import SupplyChain from '@public/assets/icon/CaseStudies/SupplyChain';
import Ecommerce from '@public/assets/icon/CaseStudies/Ecommerce';
import CardList from './CardList';

export interface IMenuData {
	key: string;
	value: string;
	icon: JSX.Element;
}
const menuItem = (lang: string): IMenuData[] => [
	{
		key: 'manufacture',
		value: homepage[lang].case_studies.manufacture,
		icon: <Manufacture />,
	},
	{
		key: 'fintech',
		value: homepage[lang].case_studies.fintech,
		icon: <Fintech />,
	},
	{
		key: 'healthcare',
		value: homepage[lang].case_studies.healthcare,
		icon: <HealthCare />,
	},
	{
		key: 'logistics',
		value: homepage[lang].case_studies.logistics,
		icon: <Logistic />,
	},
	{
		key: 'supplyChain',
		value: homepage[lang].case_studies.supplyChain,
		icon: <SupplyChain />,
	},
	{
		key: 'ecommerce',
		value: homepage[lang].case_studies.ecommerce,
		icon: <Ecommerce />,
	},
];

const cardItems = (lang: string): any => [
	{
		key: '1',
		title: 'Remitano',
		description:
			'Custom digital experiences strategically designed to improve brand visibility, engagement and conversions',
		image: '/assets/images/case-studies/remitano1.png',
	},
	{
		key: '2',
		title: 'Remitano',
		description:
			'Custom digital experiences strategically designed to improve brand visibility, engagement and conversions',
		image: '/assets/images/case-studies/remitano1.png',
	},
	{
		key: '3',
		title: 'Remitano',
		description:
			'Custom digital experiences strategically designed to improve brand visibility, engagement and conversions',
		image: '/assets/images/case-studies/remitano1.png',
	},
	{
		key: '4',
		title: 'Remitano',
		description:
			'Custom digital experiences strategically designed to improve brand visibility, engagement and conversions',
		image: '/assets/images/case-studies/remitano1.png',
	},
];

const Content: FC<ILanguageProps> = ({ lang }) => {
	const menu = menuItem(lang);
	const cardList = cardItems(lang);
	const [active, setActive] = useState(menu[0].key);
	return (
		<Container>
			<MenuItem data={menu} active={active} setActive={setActive} />
			<CardList data={cardList} lang={lang} />
		</Container>
	);
};

export default Content;

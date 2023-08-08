import { homepage } from '@public/locales/homepage';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const serviceData = (lang: string) => [
	{
		index: '01',
		title: homepage[lang]?.our_services?.mobileAppDevelopment?.title,
		description:
			homepage[lang]?.our_services?.mobileAppDevelopment?.description,
		image: '/assets/images/our-services/mobile-app-development1.png',
	},
	{
		index: '02',
		title: homepage[lang]?.our_services?.softwareDevelopment?.title,
		description: homepage[lang]?.our_services?.softwareDevelopment?.description,
		image: '/assets/images/our-services/software-development1.png',
	},
	{
		index: '03',
		title: homepage[lang]?.our_services?.uiUxDesign?.title,
		description: homepage[lang]?.our_services?.uiUxDesign?.description,
		image: '/assets/images/our-services/ux-ui.png',
	},
	{
		index: '04',
		title: homepage[lang]?.our_services?.maintenanceServices?.title,
		description: homepage[lang]?.our_services?.maintenanceServices?.description,
		image: '/assets/images/our-services/maintenance-services1.png',
	},
	{
		index: '05',
		title: homepage[lang]?.our_services?.webAppDevelopment?.title,
		description: homepage[lang]?.our_services?.webAppDevelopment?.description,
		image: '/assets/images/our-services/web-app-development.png',
	},
	{
		index: '06',
		title: homepage[lang]?.our_services?.customSoftwareDevelopment?.title,
		description:
			homepage[lang]?.our_services?.customSoftwareDevelopment?.description,
		image: '/assets/images/our-services/custom-software-development1.png',
	},
	{
		index: '07',
		title: homepage[lang]?.our_services?.aiSolution?.title,
		description: homepage[lang]?.our_services?.aiSolution?.description,
		image: '/assets/images/our-services/ai-solution.png',
	},
];

export const handleScrollToElement = (
	e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) => {
	// first prevent the default behavior
	e.preventDefault();
	// get the href and remove everything before the hash (#)
	const href = e.currentTarget.href;
	const targetId = href.replace(/.*\#/, '');
	// get the element by id and use scrollIntoView
	const elem = document.getElementById(targetId);
	elem?.scrollIntoView({
		behavior: 'smooth',
	});
};

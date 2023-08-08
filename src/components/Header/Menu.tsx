import { FC } from 'react';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { handleScrollToElement } from '@/lib/utils';

const menuItems = [
	{
		key: 'why-choose-us',
		title: 'Why choose us',
	},
	{
		key: 'services',
		title: 'Services',
	},
	{
		key: 'industries',
		title: 'Industries',
	},
];

interface MenubarProps {
	className?: string;
}
const Menubar: FC<MenubarProps> = ({ className }) => {
	return (
		<NavigationMenu className={className}>
			<NavigationMenuList>
				{menuItems.map((item) => (
					<NavigationMenuItem key={item.key}>
						<Link href={`/#${item.key}`} onClick={handleScrollToElement}>
							<NavigationMenuTrigger className="body-text-1 medium">
								{item.title}
							</NavigationMenuTrigger>
						</Link>
						{/* <NavigationMenuContent>
						</NavigationMenuContent> */}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Menubar;

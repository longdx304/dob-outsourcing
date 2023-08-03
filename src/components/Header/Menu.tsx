import { FC } from 'react';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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
	{
		key: 'resources',
		title: 'Resources',
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
						<NavigationMenuTrigger className='body-text-1 medium'>{item.title}</NavigationMenuTrigger>
						{/* <NavigationMenuContent>
						</NavigationMenuContent> */}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Menubar;

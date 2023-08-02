import { FC } from 'react';
import Container from '../Container';
import { common } from '@public/locales/common';
import Menubar from '@/app/[lang]/components/NaivigationMenu';
import { Button } from '../ui/button';
import IconMenu from '@public/svg/icon/IconMenu';

interface HeaderProps {
	lang: string;
}

const Header: FC<HeaderProps> = ({ lang }) => {
	console.log('lang:', lang);
	return (
		<Container>
			<div className="py-8 flex justify-between items-center">
				<span className="title regular">{common[lang]?.dob_tech}</span>
				<Menubar className="desktop:block mobile:hidden" />
				<Button className="desktop:block mobile:hidden">
					{common[lang]?.contact}
				</Button>
				<IconMenu className="desktop:hidden mobile:block hover:cursor-pointer" />
			</div>
		</Container>
	);
};

export default Header;

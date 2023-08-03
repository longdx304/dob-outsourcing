import { FC } from 'react';
import Container from '../Container';
import { common } from '@public/locales/common';
import Menubar from '@/components/Header/Menu';
import { Button } from '../ui/button';
import IconMenu from '@public/assets/icon/IconMenu';

interface HeaderProps {
	lang: string;
}

const Header: FC<HeaderProps> = ({ lang }) => {
	return (
		<Container className="static">
			<div className="py-8 flex justify-between items-center">
				<span className="title regular">{common[lang]?.dob_tech}</span>
				<Menubar className="desktop:block mobile:hidden" />
				<Button className="desktop:flex mobile:hidden">
					{common[lang]?.contact}
				</Button>
				<IconMenu className="desktop:hidden mobile:block hover:cursor-pointer" />
			</div>
		</Container>
	);
};

export default Header;

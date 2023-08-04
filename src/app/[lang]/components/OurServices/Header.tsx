import Container from '@/components/Container';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import { FC } from 'react';

const Header: FC<ILanguageProps> = ({ lang }) => {
	return (
		<Container className="flex flex-col justify-center items-center gap-6">
			<p className="title bold">{homepage[lang]?.our_services?.title}</p>
			<div className="desktop:px-40 mobile:px-0 text-center flex flex-col gap-2">
				<p className="h3 bold text-secondary">
					{homepage[lang]?.our_services?.subtitle}
				</p>
				<p className="body-text-1 regular">
					{homepage[lang]?.our_services?.description}
				</p>
			</div>
		</Container>
	);
};

export default Header;

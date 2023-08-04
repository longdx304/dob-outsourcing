import Container from '@/components/Container';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import { FC } from 'react';

const Header: FC<ILanguageProps> = ({ lang }) => {
	return (
		<Container className="flex flex-col justify-center items-center gap-6">
			<p className="title bold">{homepage[lang]?.case_studies?.title}</p>
			<div className="text-center flex flex-col gap-2">
				<p className="h3 bold text-secondary">
					{homepage[lang]?.case_studies?.subtitle}
				</p>
				<p className="body-text-1 regular">
					{homepage[lang]?.case_studies?.description}
				</p>
			</div>
		</Container>
	);
};

export default Header;

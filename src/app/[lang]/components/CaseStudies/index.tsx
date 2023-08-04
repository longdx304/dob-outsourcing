import { ILanguageProps } from '@/lib/types';
import { FC } from 'react';
import Header from './Header';
import Content from './Content';

const CaseStudies: FC<ILanguageProps> = ({ lang }) => {
	return (
		<article className="py-4">
			<Header lang={lang} />
			<Content lang={lang} />
		</article>
	);
};

export default CaseStudies;

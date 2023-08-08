'use client';
import { ILanguageProps } from '@/lib/types';
import { FC } from 'react';
import Header from './Header';
import Content from './Content';

const Feedback: FC<ILanguageProps> = ({ lang }) => {
	return (
		<article className="py-8">
			<Header lang={lang} />
			<Content />
		</article>
	);
};

export default Feedback;

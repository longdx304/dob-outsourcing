import { ILanguageProps } from '@/lib/types';
import { FC } from 'react';
import Header from './Header';
import ContentDesktop from './ContentDesktop';
import ContentMobile from './ContentMobile';

const OurServices: FC<ILanguageProps> = ({ lang }) => {
	return (
		<article className="py-12 scroll-mt-16" id="services">
			<Header lang={lang} />
			<div className="desktop:block mobile:hidden px-[20px]">
				<ContentDesktop lang={lang} />
			</div>
			<div className="desktop:hidden mobile:block">
				<ContentMobile lang={lang} />
			</div>
		</article>
	);
};

export default OurServices;

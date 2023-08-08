import { ILanguageProps } from '@/lib/types';
import { FC } from 'react';
import Header from './Header';
import Map from './Map';
import DobTech from './DobTech';

const WeOnGlobal: FC<ILanguageProps> = ({ lang }) => {
	return (
		<article className="py-8 mt-16">
			<Header lang={lang} />
			<Map />
			<DobTech lang={lang} />
		</article>
	);
};

export default WeOnGlobal;

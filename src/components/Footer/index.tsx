import { ILanguageProps } from '@/lib/types';
import Image from 'next/image';
import { FC } from 'react';
import Left from './Left';
import Container from '../Container';
import Right from './Right';

const Footer: FC<ILanguageProps> = ({ lang }) => {
	return (
		<footer className="relative w-full h-full" id="contact">
			<Image
				src="/assets/images/layout/bg_footer.png"
				alt="footer-bg"
				fill={true}
				className="object-cover z-[-1]"
			/>
			<Container className="flex justify-center gap-8 py-12 mobile:flex-col-reverse desktop:flex-row">
				<Left lang={lang} />
				<Right lang={lang} />
			</Container>
		</footer>
	);
};

export default Footer;

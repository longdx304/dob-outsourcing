import Container from '@/components/Container';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { flipInY } from '@/lib/animation';

const Header: FC<ILanguageProps> = ({ lang }) => {
	return (
		<Container>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={flipInY}
				className="flex flex-col justify-center items-center gap-4"
			>
				<p className="title bold text-light">
					{homepage[lang]?.feedBack?.title}
				</p>
				<div className="text-center desktop:px-40 mobile:px-5 flex flex-col gap-2">
					<p className="h2 bold text-secondary">
						{homepage[lang]?.feedBack?.subtitle}
					</p>
					<p className="body-text-1 regular text-light">
						{homepage[lang]?.feedBack?.description}
					</p>
				</div>
			</motion.div>
		</Container>
	);
};

export default Header;

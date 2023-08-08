'use client';
import { ILanguageProps } from '@/lib/types';
import { whyChooseUs } from '@public/locales/whyChooseUs';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animation';

const Banner: FC<ILanguageProps> = ({ lang }) => {
	return (
		<motion.article
			initial="hidden"
			whileInView="visible"
			variants={fadeInUp}
			className="mobile:h-[300px] desktop:h-[400px] flex items-center justify-center"
		>
			<p className="h1 bold text-light">{whyChooseUs[lang].title}</p>
		</motion.article>
	);
};

export default Banner;

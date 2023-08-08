'use client';
import Container from '@/components/Container';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animation';

const Header: FC<ILanguageProps> = ({ lang }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{ staggerChildren: 0.25 }}
		>
			<Container className="flex flex-col justify-center items-center gap-6">
				<motion.p variants={fadeInUp} className="title bold">
					{homepage[lang]?.case_studies?.title}
				</motion.p>
				<motion.div
					variants={fadeInUp}
					className="text-center flex flex-col gap-2"
				>
					<p className="h3 bold text-secondary">
						{homepage[lang]?.case_studies?.subtitle}
					</p>
					<p className="body-text-1 regular">
						{homepage[lang]?.case_studies?.description}
					</p>
				</motion.div>
			</Container>
		</motion.div>
	);
};

export default Header;

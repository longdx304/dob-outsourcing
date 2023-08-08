'use client';
import Container from '@/components/Layout/Container';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animation';

const Header: FC<ILanguageProps> = ({ lang }) => {
	return (
		<Container>
			<motion.div
				initial="hidden"
				whileInView="visible"
				transition={{ staggerChildren: 0.25 }}
				className="flex flex-col justify-center items-center gap-4"
			>
				<motion.p variants={fadeInLeft} className="title bold text-light">
					{homepage[lang]?.weOnGlobal?.title}
				</motion.p>
				<motion.div
					variants={fadeInRight}
					className="text-center desktop:px-40 mobile:px-5 flex flex-col gap-2"
				>
					<p className="h2 bold text-secondary">
						{homepage[lang]?.weOnGlobal?.subtitle}
					</p>
					<p className="body-text-1 regular text-light">
						{homepage[lang]?.weOnGlobal?.description}
					</p>
				</motion.div>
			</motion.div>
		</Container>
	);
};

export default Header;

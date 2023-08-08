'use client';
import Container from '@/components/Container';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animation';

const Header: FC<ILanguageProps> = ({ lang }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{ staggerChildren: 0.25 }}
		>
			<Container className="flex flex-col justify-center items-center gap-6">
				<motion.p variants={fadeInLeft} className="title bold">
					{homepage[lang]?.our_services?.title}
				</motion.p>
				<motion.div
					variants={fadeInRight}
					className="desktop:px-40 mobile:px-0 text-center flex flex-col gap-2"
				>
					<motion.p className="h3 bold text-secondary">
						{homepage[lang]?.our_services?.subtitle}
					</motion.p>
					<motion.p className="body-text-1 regular">
						{homepage[lang]?.our_services?.description}
					</motion.p>
				</motion.div>
			</Container>
		</motion.div>
	);
};

export default Header;

'use client';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import { FC, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp } from '@/lib/animation';

const Hero: FC<ILanguageProps> = ({ lang }) => {
	return (
		<Container className="h-[calc(100vh-104px)]">
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={fadeInUp}
				className="pt-16 flex flex-col justify-center gap-8"
			>
				<p className="h1 bold text-center text-stroke animation-text hover:text-transparent hover:cursor-pointer">
					{homepage[lang].hero.title}
				</p>
				<p className="h2 regular color-light text-center">
					{homepage[lang].hero.subtitle}
				</p>
				<section className="flex justify-center gap-8">
					<Button>{homepage[lang].hero.btn_left}</Button>
					{/* <Button variant={'outline'}>{homepage[lang].hero.btn_right}</Button> */}
				</section>
			</motion.div>
		</Container>
	);
};

export default Hero;

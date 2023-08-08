'use client';
import Container from '@/components/Layout/Container';
import { Button } from '@/components/ui/button';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animation';
import Link from 'next/link';
import { handleScrollToElement } from '@/lib/utils';

const Hero: FC<ILanguageProps> = ({ lang }) => {
	return (
		<Container className="h-[100vh] flex justify-center" id="top">
			<video
				preload="false"
				autoPlay
				loop
				muted
				playsInline
				className="video-hero"
			>
				<source src="./assets/videos/hero.webm" type="video/webm" />
			</video>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={fadeInUp}
				className="flex flex-col justify-start mt-32 gap-8"
			>
				<p className="h1 bold text-center hover:cursor-pointer">
					{homepage[lang].hero.title}
				</p>
				<p className="h2 regular color-light text-center">
					{homepage[lang].hero.subtitle}
				</p>
				<section className="flex justify-center gap-8">
					<Link href="/#contact" onClick={handleScrollToElement}>
						<Button>{homepage[lang].hero.btn_left}</Button>
					</Link>
					{/* <Button variant={'outline'}>{homepage[lang].hero.btn_right}</Button> */}
				</section>
			</motion.div>
		</Container>
	);
};

export default Hero;

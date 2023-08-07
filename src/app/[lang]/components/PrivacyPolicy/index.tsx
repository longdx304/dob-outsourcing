'use client';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { ILanguageProps } from '@/lib/types';
import IconTopLeft from '@public/assets/icon/IconTopLeft';
import { homepage } from '@public/locales/homepage';
import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animation';
import Link from 'next/link';
import { handleScrollToElement } from '@/lib/utils';

const PrivacyPolicy: FC<ILanguageProps> = ({ lang }) => {
	return (
		<motion.div initial="hidden" whileInView="visible">
			<Container className="flex desktop:flex-row mobile:flex-col justify-center py-12 desktop:gap-4 mobile:gap-16">
				<motion.section
					variants={fadeInRight}
					className="desktop:w-1/2 mobile:w-full flex flex-col justify-center desktop:items-start mobile:items-center desktop:text-start mobile:text-center gap-2"
				>
					<div className="h2 bold flex justify-start gap-2">
						<span className="text-light">
							{homepage[lang]?.privacyPolicy?.title_1}
						</span>
						<span className="text-primary">
							{homepage[lang]?.privacyPolicy?.title_2}
						</span>
					</div>
					<p>{homepage[lang]?.privacyPolicy?.description}</p>
					<Link href="#contact" onClick={handleScrollToElement}>
						<Button className="body-text-1 regular text-start h-[2.5rem] mt-4">
							<span>{homepage[lang]?.privacyPolicy?.btnContact}</span>
							<IconTopLeft />
						</Button>
					</Link>
				</motion.section>
				<motion.section
					variants={fadeInLeft}
					className="desktop:w-1/2 mobile:w-full relative overflow-hidden h-[440px]"
				>
					<Image
						fill={true}
						src="/assets/images/privacy-policy/Background.png"
						alt="privacy-policy-background"
						sizes="100vw"
						className="object-contain absolute top-0 left-0 z-0"
					/>
					<Image
						fill={true}
						src="/assets/images/privacy-policy/Frame.svg"
						alt="frame"
						className="object-none w-full h-full absolute top-0 left-0 z-0 shadow-animation heartbeat"
					/>
					<Image
						fill={true}
						src="/assets/images/privacy-policy/Group.svg"
						alt="group"
						className="object-none w-full h-full absolute top-0 left-0 z-1 animation-rotate"
					/>
				</motion.section>
			</Container>
		</motion.div>
	);
};

export default PrivacyPolicy;

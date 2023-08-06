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

const PrivacyPolicy: FC<ILanguageProps> = ({ lang }) => {
	return (
		<motion.div initial="hidden" whileInView="visible">
			<Container className="flex justify-center gap-4 py-12">
				<motion.section
					variants={fadeInRight}
					className="w-1/2 flex flex-col justify-center items-start gap-2"
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
					<Button className="body-text-1 regular text-start h-[2.5rem] mt-4">
						<span>{homepage[lang]?.privacyPolicy?.btnContact}</span>
						<IconTopLeft />
					</Button>
				</motion.section>
				<motion.section
					variants={fadeInLeft}
					className="w-1/2 h-[600px] relative overflow-hidden"
				>
					<Image
						layout="fill"
						objectFit="none"
						src="/assets/images/privacy-policy/Frame.svg"
						alt="frame"
						className="w-full h-full absolute top-0 left-0 z-0 shadow-animation heartbeat"
					/>
					<Image
						layout="fill"
						objectFit="none"
						src="/assets/images/privacy-policy/Group.svg"
						alt="group"
						className="w-full h-full absolute top-0 left-0 z-1 animation-rotate"
					/>
				</motion.section>
			</Container>
		</motion.div>
	);
};

export default PrivacyPolicy;

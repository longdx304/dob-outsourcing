'use client';
import Container from '@/components/Layout/Container';
import { Button } from '@/components/ui/button';
import { ILanguageProps } from '@/lib/types';
import IconTopLeft from '@public/assets/icon/IconTopLeft';
import { homepage } from '@public/locales/homepage';
import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animation';
import Link from 'next/link';
import { PATHS } from '@/lib/path';

const WhyChooseUs: FC<ILanguageProps> = ({ lang }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			className="relative dash mobile:mt-10 scroll-mt-20"
			id="why-choose-us"
		>
			<Container className="flex desktop:h-[600px] mobile:h-[370px] justify-between items-center gap-4">
				{/* Show Content Left */}
				<motion.div
					variants={fadeInRight}
					className="desktop:w-1/2 mobile:items-center mobile:text-center desktop:items-start desktop:text-left flex flex-col justify-center gap-8"
				>
					<p className="title bold text-light">
						{homepage[lang].why_choose_us.title}
					</p>
					<div className="flex flex-col gap-2">
						<p className="h2 bold text-secondary">
							{homepage[lang].why_choose_us.subtitle}
						</p>
						<p className="body-text-1 regular text-light">
							{homepage[lang].why_choose_us.description}
						</p>
					</div>
					<Link href={PATHS.WHY_CHOOSE_US}>
						<Button className="flex justify-center gap-2 max-w-fit">
							<span>{homepage[lang].why_choose_us.btn}</span>
							<IconTopLeft />
						</Button>
					</Link>
				</motion.div>
				{/* Show Content Right */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					// viewport={{ once: false }}
					variants={fadeInLeft}
					className="mobile:hidden desktop:flex w-1/2 h-[100%] relative justify-center items-center"
				>
					<Image
						src="/assets/images/why-choose-us/why-choose-us.png"
						alt="why-choose-us"
						fill={true}
						sizes="100vw"
						className="!relative shadow-animation hover:cursor-pointer !h-auto !w-full flex flex-col justify-center items-center top-"
						// shadow-animation transition hover:scale-105
					/>
				</motion.div>
			</Container>
		</motion.div>
	);
};

export default WhyChooseUs;

'use client';
import Container from '@/components/Layout/Container';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUpLoop } from '@/lib/animation';
const DobTech: FC<ILanguageProps> = ({ lang }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			transition={{ staggerChildren: 0.5 }}
		>
			<Container className="relative desktop:h-[700px] mobile:h-[400px]">
				<motion.div
					variants={fadeInUpLoop}
					className="w-full h-full absolute top-0 z-1"
				>
					<Image
						src="/assets/images/we-on-global/Pattern.png"
						fill={true}
						alt="pattern"
						sizes="100vw"
						className="z-[-1] w-full h-full animation-rotate object-cover"
					/>
				</motion.div>
				<motion.div
					variants={fadeInLeft}
					className="flex flex-col justify-center items-center gap-8"
				>
					<p className="desktop:pt-24 h1 text-secondary medium">
						{homepage[lang]?.dobTech}
					</p>
					<p className="body-text-1 text-light bold">
						{homepage[lang]?.weOnGlobal.dobTechDes}
					</p>
				</motion.div>
				<motion.div
					variants={fadeInRight}
					className="flex desktop:flex-row mobile:flex-col desktop:gap-0 mobile:gap-8 justify-between items-center text-center pt-12"
				>
					<div className="desktop:desktop:w-[296px] mobile:w-full mobile:w-full">
						<p className="h2 bold text-secondary">
							{homepage[lang].weOnGlobal.titleTech1}
						</p>
						<p className="body-text-1 bold">
							{homepage[lang].weOnGlobal.descriptionTech1}
						</p>
					</div>
					<div className="desktop:w-[296px] mobile:w-full">
						<p className="h2 bold text-secondary">
							{homepage[lang].weOnGlobal.titleTech2}
						</p>
						<p className="body-text-1 bold">
							{homepage[lang].weOnGlobal.descriptionTech2}
						</p>
					</div>
					<div className="desktop:w-[296px] mobile:w-full">
						<p className="h2 bold text-secondary">
							{homepage[lang].weOnGlobal.titleTech3}
						</p>
						<p className="body-text-1 bold">
							{homepage[lang].weOnGlobal.descriptionTech3}
						</p>
					</div>
				</motion.div>
			</Container>
		</motion.div>
	);
};

export default DobTech;

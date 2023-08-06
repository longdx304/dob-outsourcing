'use client';
import Container from '@/components/Container';
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
			<Container className="relative desktop:h-[700px]">
				<motion.div variants={fadeInUpLoop} className="w-full">
					<Image
						src="/assets/images/we-on-global/Pattern.svg"
						layout="fill"
						alt="pattern"
						objectFit="cover"
						className="absolute z-[-1] w-full h-full animation-rotate"
					/>
				</motion.div>
				<motion.div
					variants={fadeInLeft}
					className="flex flex-col justify-center items-center gap-8"
				>
					<p className="pt-24 h1 text-secondary medium">
						{homepage[lang]?.dobTech}
					</p>
					<p className="body-text-1 text-light bold">
						{homepage[lang]?.weOnGlobal.dobTechDes}
					</p>
				</motion.div>
				<motion.div
					variants={fadeInRight}
					className="flex justify-between items-center text-center pt-12"
				>
					<div className="w-[296px]">
						<p className="h2 bold text-secondary">
							{homepage[lang].weOnGlobal.titleTech1}
						</p>
						<p className="body-text-1 bold">
							{homepage[lang].weOnGlobal.descriptionTech1}
						</p>
					</div>
					<div className="w-[296px]">
						<p className="h2 bold text-secondary">
							{homepage[lang].weOnGlobal.titleTech2}
						</p>
						<p className="body-text-1 bold">
							{homepage[lang].weOnGlobal.descriptionTech2}
						</p>
					</div>
					<div className="w-[296px]">
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

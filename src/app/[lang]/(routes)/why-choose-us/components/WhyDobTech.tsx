'use client';
import { ILanguageProps } from '@/lib/types';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Layout/Container';
import { whyChooseUs } from '@public/locales/whyChooseUs';
import OurMission from '@public/assets/icon/WhyChooseUs/OurMission';
import OurVision from '@public/assets/icon/WhyChooseUs/OurVision';
import { fadeInLeft, fadeInRight } from '@/lib/animation';
import Image from 'next/image';

const WhyDobTech: FC<ILanguageProps> = ({ lang }) => {
	return (
		<Container className="w-full h-full">
			<motion.article
				initial="hidden"
				whileInView="visible"
				className="relative w-full flex mobile:flex-col desktop:flex-row justify-between items-center mb-20 gap-16"
			>
				{/* Background */}
				<div className="absolute z-[-1] w-[500px] h-full bottom-[-50%] right-0">
					<Image
						src="/assets/images/why-choose-us/background1.png"
						alt="bg-wca-1"
						fill={true}
						sizes="100vw"
						className="z-[-1] object-cover animation-rotate"
					/>
				</div>
				{/* Left Content */}
				<motion.section
					variants={fadeInRight}
					className="desktop:w-1/2 mobile:w-full mobile:text-center desktop:text-left"
				>
					{/* Title */}
					<p className="h1 bold text-light pb-6 whitespace-nowrap">
						{whyChooseUs[lang]?.whyDobTech?.title}
					</p>
					{/* Content */}
					<div className="flex flex-col justify-start desktop:text-start gap-6 mobile:text-center">
						{whyChooseUs[lang]?.whyDobTech?.content.map(
							(item: { title: string; content: string }, index: number) => (
								<div key={index}>
									<p className="title bold text-secondary pb-4">{item.title}</p>
									<p className="body-text-1 regular text-light">
										{item.content}
									</p>
								</div>
							)
						)}
					</div>
				</motion.section>
				{/* Right Content */}
				<motion.section
					variants={fadeInLeft}
					className="desktop:w-1/2 mobile:w-full"
				>
					<div className="h-[330px] w-full bg-[#3FB3F8] rounded-lg px-6 py-6 flex flex-col justify-center">
						<div className="group hover:cursor-pointer h-1/2 flex justify-between items-center gap-4 border-b">
							<div className="w-[44px] h-[44px] group-hover:scale-[1.2] transition-all">
								<OurMission />
							</div>
							<div>
								<p className="subtitle-1 bold text-light">
									{whyChooseUs[lang]?.ourMission?.title}
								</p>
								<p className="body-text-1 regular text-light">
									{whyChooseUs[lang]?.ourMission?.content}
								</p>
							</div>
						</div>
						{/* <div className=''/> */}
						<div className="group hover:cursor-pointer h-1/2 flex justify-between items-center gap-4">
							<div className="w-[44px] h-[44px] group-hover:scale-[1.2] transition-all">
								<OurVision />
							</div>
							<div>
								<p className="subtitle-1 bold text-light">
									{whyChooseUs[lang]?.ourVision?.title}
								</p>
								<p className="body-text-1 regular text-light">
									{whyChooseUs[lang]?.ourVision?.content}
								</p>
							</div>
						</div>
					</div>
				</motion.section>
			</motion.article>
		</Container>
	);
};

export default WhyDobTech;

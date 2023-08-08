'use client';
import { ILanguageProps } from '@/lib/types';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Layout/Container';
import { whyChooseUs } from '@public/locales/whyChooseUs';
import { fadeInLeft, fadeInRight } from '@/lib/animation';
import OurCosts from '@public/assets/icon/WhyChooseUs/OurCosts';
import OurWorkforce from '@public/assets/icon/WhyChooseUs/OurWorkforce';
import Image from 'next/image';

const WhyVietnam: FC<ILanguageProps> = ({ lang }) => {
	return (
		<Container>
			<motion.article
				initial="hidden"
				whileInView="visible"
				className="relative w-full flex mobile:flex-col desktop:flex-row justify-between items-center mb-20 gap-16"
			>
				{/* Background */}
				<div className="absolute z-[-1] w-[500px] h-full bottom-[-50%] left-[0%]">
					<Image
						src="/assets/images/why-choose-us/background1.png"
						alt="bg-wca-2"
						fill={true}
						sizes="100vw"
						className="z-[-1] object-contain animation-rotate"
					/>
				</div>
				{/* Left Content */}
				<motion.section
					variants={fadeInRight}
					className="desktop:w-1/2 mobile:w-full mobile:text-center desktop:text-left"
				>
					{/* Title */}
					<p className="h1 bold text-light pb-6 whitespace-nowrap">
						{whyChooseUs[lang]?.whyVietnam?.title}
					</p>
					{/* Content */}
					<div className="flex flex-col justify-start desktop:text-start gap-6 mobile:text-center">
						{whyChooseUs[lang]?.whyVietnam?.content.map(
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
							<div className="h-[65px] group-hover:scale-[1.2] transition-all">
								<OurCosts />
							</div>
							<div>
								<p className="subtitle-1 bold text-light">
									{whyChooseUs[lang]?.ourCosts?.title}
								</p>
								<p className="body-text-1 regular text-light">
									{whyChooseUs[lang]?.ourCosts?.content}
								</p>
							</div>
						</div>
						{/* <div className=''/> */}
						<div className="group hover:cursor-pointer h-1/2 flex justify-between items-center gap-4">
							<div className="h-[65px] group-hover:scale-[1.2] transition-all">
								<OurWorkforce />
							</div>
							<div>
								<p className="subtitle-1 bold text-light">
									{whyChooseUs[lang]?.ourWorkforce?.title}
								</p>
								<p className="body-text-1 regular text-light">
									{whyChooseUs[lang]?.ourWorkforce?.content}
								</p>
							</div>
						</div>
					</div>
				</motion.section>
			</motion.article>
		</Container>
	);
};

export default WhyVietnam;

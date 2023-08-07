'use client';

import { useRef, useState, FC, useMemo } from 'react';
import { ILanguageProps } from '@/lib/types';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import IconTopLeft from '@public/assets/icon/IconTopLeft';
import ArrowLeft from '@public/assets/icon/ArrowRight';
import ArrowRight from '@public/assets/icon/ArrowLeft';
import { homepage } from '@public/locales/homepage';
import { serviceData } from '@/lib/utils';
import { motion } from 'framer-motion';
import { fadeInUp, flipInY } from '@/lib/animation';

const ContentDesktop: FC<ILanguageProps> = ({ lang }) => {
	const swiperRef = useRef();
	const [active, setActive] = useState<number>(1);

	const handlePrev = () => {
		if (!swiperRef.current || active === 0) return;
		setActive((prev) => prev - 1);
		swiperRef.current?.slidePrev();
	};

	const handleNext = () => {
		if (!swiperRef.current || active === 6) return;
		setActive((prev) => prev + 1);
		swiperRef.current?.slideNext();
	};
	const dataService = useMemo(() => serviceData(lang), [lang]);

	return (
		<motion.article
			initial="hidden"
			whileInView="visible"
			variants={flipInY}
			transition={{ staggerChildren: 0.25 }}
			className="relative"
		>
			<section className="h-[460px] w-full relative mt-16 overflow-hidden border-b-4 border-secondary">
				{/* Show background image */}
				<div className="absolute top-0 left-0 z-[-1] !w-[100vw] h-full">
					{dataService.map((item, index) => (
						<Image
							key={item.index}
							src={item.image}
							alt={item.index}
							fill={true}
							loading="lazy"
							className={`
							 transition-transform duration-300 aspect-none object-cover
							${
								active === index
									? 'opacity-100 scale-[1] translate-x-0 transition-transform duration-300'
									: 'scale-[1.1] translate-x-[-50px] opacity-0'
							}`}
						/>
					))}
				</div>
				{/* Show item service */}
				<Swiper
					slidesPerView={4}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					onBeforeInit={(swiper: any) => {
						swiperRef.current = swiper;
					}}
					className="h-[460px] w-full bg-transparent relative w-full h-full z-10"
				>
					{dataService.map((item, index) => (
						<SwiperSlide
							key={item.index}
							className={`
							group !m-0 !w-1/4 transition-colors ease-out duration-300  relative z-10 cursor-pointer border-r border-[rgba(255,255,255,.3)]
							${active === index ? '!bg-[rgba(7,23,49,.4)]' : 'bg-transparent'}
						`}
							onMouseMove={() => setActive(index)}
						>
							<div className="px-[26px] py-[24px] w-full h-full flex flex-col justify-end gap-2 bg-gradient-service translate-y-0 transition-transform duration-300 delay-700">
								{/* Show title & index */}
								<div
									className={`
								subtitle-1 bold text-light text-start flex gap-4 justify-start items-center
								${active === index ? 'opacity-1' : 'opacity-70'}
							`}
								>
									<span className="h3 text-secondary">{item.index}</span>
									<span>{item.title}</span>
								</div>
								{/* Show description & button */}
								<div
									className={`
								overflow-hidden duration-300 max-h-0
								${
									active === index &&
									'!max-h-[250px] !transition-[max-height] ease-in duration-300'
								}
							`}
								>
									<p
										className={`
									body-text-1 regular text-start opacity-0 translate-x-1/2 transition-all ease-out duration-300
									${
										active === index &&
										'!translate-x-0 opacity-100 transition-all ease-out duration-300'
									}
								`}
									>
										{item.description}
									</p>
									<Button
										className={`
									body-text-1 regular text-start opacity-0 translate-x-1/2 transition-all ease-out duration-300 flex my-5 gap-2 h-[2.5rem]
									${
										active === index &&
										'!translate-x-0 opacity-100 transition-all ease-out duration-300'
									}
								`}
									>
										<span>{homepage[lang].btnExplora}</span>
										<IconTopLeft />
									</Button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			{/* Show Button Prev & Next Slider */}
			<motion.div
				variants={fadeInUp}
				className="my-12 flex justify-center gap-4"
			>
				<Button className="bg-white" size="roundedFull" onClick={handlePrev}>
					<ArrowLeft />
				</Button>
				<Button size="roundedFull" onClick={handleNext}>
					<ArrowRight />
				</Button>
			</motion.div>
		</motion.article>
	);
};

export default ContentDesktop;

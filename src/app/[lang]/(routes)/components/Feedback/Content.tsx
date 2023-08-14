import { Button } from '@/components/ui/button';
import ArrowRight from '@public/assets/icon/ArrowLeft';
import ArrowLeft from '@public/assets/icon/ArrowRight';
import Image from 'next/image';
import { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { flipInX } from '@/lib/animation';
const data = [
	{
		id: 1,
		name: 'Ronald Richards',
		position: 'CEO/Founder DynaVision Development',
		message:
			"Dob Tech's software development expertise is impressive. Their team's dedication and clear communication led to a seamless process, delivering beyond expectations.",
		image: '/assets/images/feedback/fb1.png',
	},
	{
		id: 2,
		name: 'Gregory Hayes',
		position: 'CEO/Founder Strat Security',
		message:
			"NexGen Systems consistently delivers outstanding software solutions. Their team's technical prowess, under John's leadership, has significantly enhanced our IT infrastructure. Highly impressed.",
		image: '/assets/images/feedback/fb2.png',
	},
	{
		id: 3,
		name: 'Yeung Jun Ming',
		position: 'CEO/Founder TechMaster Solutions',
		message:
			'We chose DOB Tech to develop a complex and responsive e-commerce website. The entire process of working with DOB Tech was smooth and efficient. meet new challenges. ',
		image: '/assets/images/feedback/fb3.png',
	},
	{
		id: 4,
		name: 'Ralph Edwards',
		position: 'CEO/Founder DynaVision Development',
		message:
			'DOB Tech is an outstanding software development company. Their expertise, communication, and dedication to quality are impressive. ',
		image: '/assets/images/feedback/fb4.png',
	},
	{
		id: 5,
		name: 'Savannah Nguyen',
		position: 'CEO/Founder DynaVision Development',
		message:
			"SynthoTech Solutions has redefined our project's success. Their development excellence, guided by John's expertise, brought our vision to life. Incredibly satisfied with the outcome.",
		image: '/assets/images/feedback/fb5.png',
	},
	{
		id: 6,
		name: 'Ryan Mitchell',
		position: 'CEO/Founder NexGen Systems',
		message:
			"NexGen Systems consistently delivers outstanding software solutions. Their team's technical prowess, under John's leadership, has significantly enhanced our IT infrastructure. Highly impressed.",
		image: '/assets/images/feedback/fb6.png',
	},
	{
		id: 7,
		name: 'Liam Thompson',
		position: 'CEO/Founder TechFusion Innovations',
		message:
			"Exceptional software solutions from Dob Tech. Their team's skillful approach, guided by John, resulted in a successful project that's making waves in the market.",
		image: '/assets/images/feedback/fb7.png',
	},
];

const Content: FC = () => {
	const swiperRef = useRef<any>();

	const handlePrev = () => {
		swiperRef.current?.slidePrev();
	};

	const handleNext = () => {
		swiperRef.current?.slideNext();
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			variants={flipInX}
			className="pt-12 mx-5"
		>
			<Swiper
				// slidesPerView={4}
				effect={'coverflow'}
				coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2 }}
				grabCursor={true}
				centeredSlides={true}
				modules={[EffectCoverflow]}
				className="mySwiper !h-[450px]"
				loop={true}
				onBeforeInit={(swiper: any) => {
					swiperRef.current = swiper;
				}}
				breakpoints={{
					1500: {
						slidesPerView: 4,
					},
					1024: {
						slidesPerView: 3,
					},
					500: {
						slidesPerView: 2,
					},
					300: {
						slidesPerView: 1,
					},
				}}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id} className="!flex items-center">
						<div className="relative p-10 mx-auto h-full bg-white rounded-[24px] flex flex-col justify-start items-start gap-4">
							{/* Show Avatar */}
							<Image
								src={item.image}
								alt={item.id.toString()}
								fill={true}
								sizes="100vw"
								className="!relative bg-primary !w-[60px] !h-[60px] rounded-full"
							/>
							{/* Show Name & Position */}
							<div className="text-start">
								<p className="title bold text-secondary">{item.name}</p>
								<p className="mt-2 caption-text regular text-primary">
									{item.position}
								</p>
							</div>
							{/* Show Message */}
							<p className="subtitle-2 regular text-dark text-start max-h-[215px] text-ellipsis overflow-y-hidden">
								{item.message}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="py-8 flex justify-center gap-4">
				<Button className="bg-white" size="roundedFull" onClick={handlePrev}>
					<ArrowLeft />
				</Button>
				<Button size="roundedFull" onClick={handleNext}>
					<ArrowRight />
				</Button>
			</div>
		</motion.div>
	);
};

export default Content;

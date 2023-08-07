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
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
	},
	{
		id: 2,
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
	},
	{
		id: 3,
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
	},
	{
		id: 4,
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
	},
	{
		id: 5,
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
	},
	{
		id: 6,
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
	},
	{
		id: 7,
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
	},
	{
		id: 8,
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
	},
	{
		id: 9,
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
	},
	{
		id: 10,
		name: 'Nguyễn Văn A',
		position: 'CEO',
		message:
			'DOB Tech is an outstanding software development companyDOB Tech is an outstanding . Their expertise, communication, software development company. ',
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
								src="/assets/images/feedback/default.png"
								alt={item.id.toString()}
								fill={true}
								sizes="100px"
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

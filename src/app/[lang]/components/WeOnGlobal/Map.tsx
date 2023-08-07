'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { flipInY } from '@/lib/animation';

const Map = () => {
	return (
		<motion.article
			initial="hidden"
			whileInView="visible"
			className="pt-8 px-5"
			variants={flipInY}
		>
			<div className="w-full relative aspect-w-16 aspect-h-9">
				<Image
					src="/assets/images/we-on-global/EarthMap2.png"
					fill={true}
					alt="earth-map"
					className="object-contain h-full w-full absolute top-0 left-0 transition z-[-1]"
				/>
			</div>
		</motion.article>
	);
};

export default Map;

import { Button } from '@/components/ui/button';
import IconTopLeft from '@public/assets/icon/IconTopLeft';
import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { flipInY } from '@/lib/animation';

interface ICardListProps {
	data: any;
	lang: string;
}
const CardList: FC<ICardListProps> = ({ data, lang }) => {
	return (
		<motion.article
			initial="hidden"
			whileInView="visible"
			variants={flipInY}
			transition={{ staggerChildren: 0.25 }}
			className="w-full py-4px flex justify-center items-center flex-wrap gap-8"
		>
			{data.map((item: any) => (
				<div
					key={item.key}
					className="flex flex-col justify-end relative max-w-[500px] h-[400px] overflow-hidden rounded-lg
					group hover:cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-500/100"
				>
					{/* <div className=" !z-[0]" /> */}
					<Image
						src={item.image}
						alt={item.title}
						layout="fill"
						objectFit="contain"
						className="w-full h-full z-[-1]"
					/>
					<div
						className="p-8 text-start bg-gradient-service
							translate-y-0 transition-transform duration-300 delay-700"
					>
						<p className="h3 bold text-light opacity-70 group-hover:opacity-100 ">
							{item.title}
						</p>
						<div className="pt-4 overflow-hidden max-h-0 group-hover:max-h-[250px] transition-[max-height] duration-500">
							<p className="body-text-1 regular opacity-0 translate-x-1/2 group-hover:!translate-x-0 group-hover:opacity-100 transition-all ease-out duration-500 delay-300">
								{item.description}
							</p>
							<Button
								className="body-text-1 regular opacity-0 translate-x-1/2 flex my-5 gap-2 h-[2.5rem]
									group-hover:!translate-x-0 group-hover:opacity-100 transition-all ease-out duration-500 delay-300
								"
							>
								<span>{'View the project'}</span>
								<IconTopLeft />
							</Button>
						</div>
					</div>
				</div>
			))}
		</motion.article>
	);
};

export default CardList;

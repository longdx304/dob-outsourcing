'use client';
import { ILanguageProps } from '@/lib/types';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/animation';
import { Input } from '../../ui/input';
import { footer } from '@public/locales/footer';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';

const Right: FC<ILanguageProps> = ({ lang }) => {
	return (
		<motion.article
			initial="hidden"
			whileInView="visible"
			variants={fadeInLeft}
			className="desktop:w-1/2 mobile:w-full text-light flex flex-col justify-start items-center gap-6"
		>
			<section className="flex flex-col desktop:hidden mobile:text-center">
				<p className="h1 bold">{footer[lang].title}</p>
				<p className="pt-2 body-text-1 regular">{footer[lang].description}</p>
			</section>
			<div className="flex flex-col justify-start items-start gap-2 w-full">
				<p className="body-text-1 regular">{footer[lang].title_name}</p>
				<Input
					className="w-full"
					type="text"
					id="name"
					placeholder={footer[lang].plc_name}
				/>
			</div>
			<div className="flex flex-col justify-start items-start gap-2 w-full">
				<p className="body-text-1 regular">{footer[lang].title_email}</p>
				<Input
					className="w-full"
					type="email"
					id="email"
					placeholder={footer[lang].plc_email}
				/>
			</div>
			<div className="flex flex-col justify-start items-start gap-2 w-full">
				<p className="body-text-1 regular">{footer[lang].title_phone}</p>
				<Input
					className="w-full"
					type="text"
					id="phone"
					placeholder={footer[lang].plc_phone}
				/>
			</div>
			<div className="flex flex-col justify-start items-start gap-2 w-full">
				<p className="body-text-1 regular">{footer[lang].title_message}</p>
				<Textarea
					className="w-full h-[150px]"
					placeholder={footer[lang].plc_message}
				/>
			</div>
			<Button className="bg-secondary">{footer[lang].btn_send}</Button>
		</motion.article>
	);
};

export default Right;

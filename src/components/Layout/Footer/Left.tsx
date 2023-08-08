'use client';
import { ILanguageProps } from '@/lib/types';
import Email from '@public/assets/icon/Email';
import Location from '@public/assets/icon/Location';
import Phone from '@public/assets/icon/Phone';
import { footer } from '@public/locales/footer';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInRight } from '@/lib/animation';

const Left: FC<ILanguageProps> = ({ lang }) => {
	return (
		<motion.article
			initial="hidden"
			whileInView="visible"
			variants={fadeInRight}
			className="desktop:w-1/2 mobile:w-full text-light flex flex-col justify-start gap-12 mobile:pb-40 desktop:pb-12"
		>
			<section className="desktop:flex mobile:hidden flex-col">
				<p className="h1 bold">{footer[lang].title}</p>
				<p className="pt-2 body-text-1 regular">{footer[lang].description}</p>
			</section>
			<section className="flex flex-col justify-start gap-8">
				<div className="flex justify-start gap-6 items-center">
					<Email />
					<span className="body-text-1 regular">{footer[lang].email}</span>
				</div>
				<div className="flex justify-start gap-6 items-center">
					<Location />
					<span className="body-text-1 regular">{footer[lang].address_1}</span>
				</div>
				<div className="flex justify-start gap-6 items-center">
					<Location />
					<span className="body-text-1 regular">{footer[lang].address_2}</span>
				</div>
				<div className="flex justify-start gap-6 items-center">
					<Location />
					<span className="body-text-1 regular">{footer[lang].address_3}</span>
				</div>
				<div className="flex justify-start gap-6 items-center">
					<Phone />
					<span className="body-text-1 regular">{footer[lang].phone}</span>
				</div>
			</section>
		</motion.article>
	);
};

export default Left;

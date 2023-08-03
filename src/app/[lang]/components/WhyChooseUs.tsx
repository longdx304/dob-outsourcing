import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { ILanguageProps } from '@/lib/types';
import IconTopLeft from '@public/assets/icon/IconTopLeft';
import { homepage } from '@public/locales/homepage';
import Image from 'next/image';
import { FC } from 'react';

const WhyChooseUs: FC<ILanguageProps> = ({ lang }) => {
	return (
		<div className="relative">
			<div className="absolute glass left-0 top-[-10px] w-[100vw] h-[50px] bg-white" />
			<Container className="flex desktop:h-[600px] mobile:h-[370px] justify-between gap-4">
				<section className="desktop:w-1/2 mobile:items-center mobile:text-center desktop:items-start desktop:text-left flex flex-col justify-center gap-8">
					<p className="title bold text-light">
						{homepage[lang].why_choose_us.title}
					</p>
					<div className="flex flex-col gap-2">
						<p className="h2 bold text-secondary">
							{homepage[lang].why_choose_us.subtitle}
						</p>
						<p className="body-text-1 regular text-light">
							{homepage[lang].why_choose_us.description}
						</p>
					</div>
					<Button className="flex justify-center gap-2 max-w-fit">
						<span>{homepage[lang].why_choose_us.btn}</span>
						<IconTopLeft />
					</Button>
				</section>
				<section className="mobile:hidden desktop:block w-1/2 h-full">
					<Image
						width={530}
						height={530}
						src="./assets/images/why-choose-us.svg"
						alt="why-choose-us"
						className="shadow-animation transition hover:scale-105 hover:cursor-pointer h-full flex flex-col justify-center items-center"
					/>
				</section>
			</Container>
		</div>
	);
};

export default WhyChooseUs;

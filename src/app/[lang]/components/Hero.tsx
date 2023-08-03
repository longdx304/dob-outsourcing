import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { ILanguageProps } from '@/lib/types';
import { homepage } from '@public/locales/homepage';
import { FC } from 'react';

const Hero: FC<ILanguageProps> = ({ lang }) => {
	return (
		<Container className="h-[calc(100vh-104px)]">
			<div className="pt-16 flex flex-col justify-center gap-8">
				<p className="h1 bold text-center transition duration-200 text-stroke hover:text-transparent hover:cursor-pointer">
					{homepage[lang].hero.title}
				</p>
				<p className="h2 regular color-light text-center">
					{homepage[lang].hero.subtitle}
				</p>
				<section className="flex justify-center gap-8">
					<Button>{homepage[lang].hero.btn_left}</Button>
					{/* <Button variant={'outline'}>{homepage[lang].hero.btn_right}</Button> */}
				</section>
			</div>
		</Container>
	);
};

export default Hero;

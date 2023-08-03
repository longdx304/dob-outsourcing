import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';

export default function Homepage({ params }: { params: { lang: string } }) {
	return (
		<main>
			<Hero lang={params.lang} />
			<WhyChooseUs lang={params.lang} />
		</main>
	);
}

import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import CaseStudies from './components/CaseStudies';

export default function Homepage({ params }: { params: { lang: string } }) {
	return (
		<main>
			<Hero lang={params.lang} />
			<WhyChooseUs lang={params.lang} />
			<OurServices lang={params.lang} />
			<CaseStudies lang={params.lang} />
		</main>
	);
}

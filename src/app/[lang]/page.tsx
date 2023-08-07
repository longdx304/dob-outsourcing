import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import CaseStudies from './components/CaseStudies';
import WeOnGlobal from './components/WeOnGlobal';
import Feedback from './components/Feedback';
import PrivacyPolicy from './components/PrivacyPolicy';
import BackToTop from './components/BackToTop';

export default function Homepage({ params }: { params: { lang: string } }) {
	return (
		<main>
			<Hero lang={params.lang} />
			<WhyChooseUs lang={params.lang} />
			<OurServices lang={params.lang} />
			<CaseStudies lang={params.lang} />
			<WeOnGlobal lang={params.lang} />
			<Feedback lang={params.lang} />
			<PrivacyPolicy lang={params.lang} />
			<BackToTop />
		</main>
	);
}

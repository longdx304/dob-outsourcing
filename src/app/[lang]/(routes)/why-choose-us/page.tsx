import Banner from './components/Banner';
import WhyDobTech from './components/WhyDobTech';
import WhyVietnam from './components/WhyVietnam';

export default function WhyChooseUsPage({
	params,
}: {
	params: { lang: string };
}) {
	return (
		<main>
			<Banner lang={params.lang} />
			<WhyDobTech lang={params.lang} />
			<WhyVietnam lang={params.lang} />
		</main>
	);
}

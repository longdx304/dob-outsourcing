import Container from '@/components/Container';
import { common } from '@public/locales/common';

export default function Homepage({ params }: { params: { lang: string } }) {
	return (
		<Container>
			<main className="big-text-1">{common[params.lang]?.hello}</main>
		</Container>
	);
}

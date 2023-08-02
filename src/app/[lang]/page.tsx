import { common } from '@/public/locales/common';

export default function Homepage({ params }: { params: { lang: string } }) {

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 big-text-1">
			{common[params.lang]?.hello}
		</main>
	);
}

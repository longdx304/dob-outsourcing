'use client';
import { useState } from 'react';
import {
	useMotionValueEvent,
	useScroll,
	useViewportScroll,
} from 'framer-motion';
import Link from 'next/link';
import { handleScrollToElement } from '@/lib/utils';

const BackToTop = () => {
	const [isSticky, setSticky] = useState(false);
	const { scrollY } = useScroll();

	const isBrowser = () => typeof window !== 'undefined';

	const scrollToTop = () => {
		if (!isBrowser()) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 400) {
			setSticky(true);
			return;
		}
		setSticky(false);
	});

	return (
		<button
			onClick={scrollToTop}
			className={`btn-back-to-top ${
				isSticky ? '!flex opacity-1' : '!hidden opacity-0 pointer-events-none'
			}`}
		>
			<svg height="1.2em" className="arrow" viewBox="0 0 512 512">
				<path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
			</svg>
			<p className="text">Back to Top</p>
		</button>
	);
};

export default BackToTop;

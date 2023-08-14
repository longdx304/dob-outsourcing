'use client';
import { FC, useState } from 'react';
import Container from '../Container';
import { common } from '@public/locales/common';
import Menubar from '@/components/Layout/Header/Menu';
import { Button } from '../../ui/button';
import IconMenu from '@public/assets/icon/IconMenu';
import Link from 'next/link';
import { handleScrollToElement } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '@/lib/animation';
import { PATHS } from '@/lib/path';
import Image from 'next/image';

interface HeaderProps {
	lang: string;
}

const Header: FC<HeaderProps> = ({ lang }) => {
	const [isSticky, setSticky] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 10) {
			setSticky(true);
			return;
		}
		setSticky(false);
	});

	return (
		<header
			className={`fixed z-[100] w-full top-0 left-0 ${
				isSticky ? '!bg-[#020e21fc]' : 'bg-transparent'
			}`}
		>
			<Container>
				<motion.div
					initial="hidden"
					whileInView="visible"
					className={`flex justify-between items-center transition-all ${
						isSticky ? 'py-3' : 'py-6'
					}`}
				>
					<motion.span
						variants={fadeInRight}
						className="title regular hover:cursor-pointer flex gap-4"
					>
						<Image
							src={'/assets/images/layout/Logo1.png'}
							alt="logo-header"
							// fill={true}
							sizes="100vw"
							width={22}
							height={40}
							className='object-contain'
						/>
						<Link href={PATHS.HOME}>{common[lang]?.dob_tech}</Link>
					</motion.span>
					<motion.div variants={fadeInLeft}>
						<Menubar className="desktop:block mobile:hidden" />
					</motion.div>
					<motion.div variants={fadeInLeft}>
						<Link href="#contact" onClick={handleScrollToElement}>
							<Button className="desktop:flex mobile:hidden">
								{common[lang]?.contact}
							</Button>
						</Link>
						<IconMenu className="desktop:hidden mobile:block hover:cursor-pointer" />
					</motion.div>
				</motion.div>
			</Container>
		</header>
	);
};

export default Header;

'use client';

import Container from '@/components/Container';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ILanguageProps } from '@/lib/types';
import { serviceData } from '@/lib/utils';
import IconAdd from '@public/assets/icon/IconAdd';
import Image from 'next/image';
import { FC, useMemo, useState } from 'react';

const ContentMobile: FC<ILanguageProps> = ({ lang }) => {
	const dataService = useMemo(() => serviceData(lang), [lang]);
	const [active, setActive] = useState<number>(1);

	return (
		<Container className="py-12">
			{dataService.map((item, index) => (
				<Collapsible
					key={index}
					open={index === active}
					onOpenChange={() =>
						index === active ? setActive(-1) : setActive(index)
					}
					className="bg-transparent focus:bg-transparent hover:bg-transparent"
				>
					<CollapsibleTrigger className="flex justify-between items-center w-full border-b-2 border-secondary py-2">
						<div className="flex justify-start items-center gap-4">
							<span className="big-text-2 regular min-w-[100px] text-start text-stroke-white text-transparent">
								{item.index}
							</span>
							<span className="subtitle-1 regular">{item.title}</span>
						</div>
						<div>
							<IconAdd />
						</div>
					</CollapsibleTrigger>
					<CollapsibleContent className="py-8">
						<p className="body-text-1 regular mb-8">{item.description}</p>
						<div className="relative w-full !h-[180px]">
							<Image
								src={item.image}
								alt={item.title}
								layout="fill"
								objectFit="cover"
								loading="lazy"
								quality={100}
								className="w-full h-full"
							/>
						</div>
					</CollapsibleContent>
				</Collapsible>
			))}
		</Container>
	);
};

export default ContentMobile;

import { cn } from '@/lib/utils';
import { FC } from 'react';

interface IContainerProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
}
const Container: FC<IContainerProps> = ({ id, className, children }) => {
	return (
		<article
			className={cn(
				`
					!w-full max-w-[2520px] mx-auto
					desktop:max-w-[1120px] desktop:px-[1.25rem]
					tablet:max-w-[550px]	tablet:px-[1rem]
					mobile:max-w-[380px] mobile:px-[1rem]
				`,
				className
			)}
			id={id}
		>
			{children}
		</article>
	);
};

export default Container;

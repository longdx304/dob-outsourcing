import { FC } from 'react';

interface IContainerProps {
	children: React.ReactNode;
}
const Container: FC<IContainerProps> = ({ children }) => {
	return (
		<article
			className="
				!w-full max-w-[2520px] mx-auto
				desktop4k:max-w-[1920px] desktop4k:px-[1.25rem]
				desktop:max-w-[1120px] desktop:px-[1.25rem]
				tablet:max-w-[550px]	tablet:px-[1rem]
				mobile:max-w-[380px] mobile:px-[1rem]
			"
		>
			{children}
		</article>
	);
};

export default Container;

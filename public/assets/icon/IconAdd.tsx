import { IconMenuProps } from '@/lib/types';

const IconAdd = (props: IconMenuProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			{...props}
		>
			<path
				d="M32 14V50M50 32L14 32"
				stroke="white"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default IconAdd;

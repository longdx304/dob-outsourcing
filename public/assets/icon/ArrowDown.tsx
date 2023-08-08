import { IconMenuProps } from '@/lib/types';

const ArrowDown = (props: IconMenuProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="8"
			viewBox="0 0 14 8"
			fill="none"
			{...props}
		>
			<path
				d="M12.9188 0.183594H1.07877C0.118772 0.183594 -0.361228 1.34359 0.318772 2.02359L5.49877 7.20359C6.32877 8.03359 7.67877 8.03359 8.50877 7.20359L10.4788 5.23359L13.6888 2.02359C14.3588 1.34359 13.8788 0.183594 12.9188 0.183594Z"
				fill="black"
			/>
		</svg>
	);
};

export default ArrowDown;

import { IconMenuProps } from '@/lib/types';
import { FC } from 'react';

const Email: FC = (props: IconMenuProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			{...props}
		>
			<g clip-path="url(#clip0_831_833)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M27.3346 4.66537C27.3346 3.92899 26.7377 3.33203 26.0013 3.33203H2.0013C1.26492 3.33203 0.667969 3.92898 0.667969 4.66536V23.332C0.667969 24.0684 1.26492 24.6654 2.0013 24.6654H26.0013C26.7377 24.6654 27.3346 24.0684 27.3346 23.332V4.66537ZM5.44295 6.24705C4.84374 5.81904 4.011 5.95783 3.58299 6.55705C3.15498 7.15626 3.29377 7.989 3.89298 8.41701L13.2263 15.0837C13.6899 15.4148 14.3127 15.4148 14.7763 15.0837L24.1096 8.41701C24.7088 7.989 24.8476 7.15626 24.4196 6.55705C23.9916 5.95783 23.1589 5.81904 22.5597 6.24705L14.0013 12.3602L5.44295 6.24705Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_831_833">
					<rect
						width="26.6667"
						height="26.6667"
						fill="white"
						transform="translate(0.667969 0.666016)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default Email;

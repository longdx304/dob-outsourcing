import { IconMenuProps } from '@/lib/types';
import { FC } from 'react';

const Location: FC = (props: IconMenuProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.5 0C5.87258 0 0.5 3.90733 0.5 8.72727V8.94454C0.5 10.2388 0.886217 11.5177 1.63198 12.6928L1.73808 12.86C3.89996 16.2666 6.76578 19.4126 10.236 22.1888L12.5 24L14.764 22.1888C18.2342 19.4126 21.1 16.2666 23.2619 12.86L23.368 12.6928C24.1138 11.5177 24.5 10.2388 24.5 8.94454V8.72727C24.5 3.90733 19.1274 0 12.5 0ZM12.5 13.0909C15.8137 13.0909 18.5 11.1372 18.5 8.72727C18.5 6.3173 15.8137 4.36364 12.5 4.36364C9.18629 4.36364 6.5 6.3173 6.5 8.72727C6.5 11.1372 9.18629 13.0909 12.5 13.0909Z"
				fill="white"
			/>
		</svg>
	);
};

export default Location;

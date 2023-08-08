import { IconMenuProps } from '@/lib/types';
import { FC } from 'react';

const Logistic: FC = (props: IconMenuProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="38"
			height="45"
			viewBox="0 0 38 45"
			fill="none"
			{...props}
		>
			<path
				d="M23.875 13.4305C23.8168 13.3393 23.7413 13.2652 23.6545 13.2142C23.5677 13.1633 23.472 13.1367 23.375 13.1367H14.625C14.528 13.1367 14.4323 13.1633 14.3455 13.2142C14.2587 13.2652 14.1832 13.3393 14.125 13.4305L12.25 16.368C12.1689 16.4951 12.125 16.6497 12.125 16.8086V29.293C12.125 29.6825 12.2567 30.0561 12.4911 30.3315C12.7255 30.607 13.0435 30.7617 13.375 30.7617H24.625C24.9565 30.7617 25.2745 30.607 25.5089 30.3315C25.7433 30.0561 25.875 29.6825 25.875 29.293V16.8086C25.875 16.6497 25.8311 16.4951 25.75 16.368L23.875 13.4305ZM14.9375 14.6055H23.0625L24 16.0742H14L14.9375 14.6055ZM16.5 19.0117H13.375V17.543H16.5V19.0117ZM17.75 17.543H20.25V21.3118L19.3469 20.6038C19.2442 20.5233 19.1235 20.4804 19 20.4804C18.8765 20.4804 18.7558 20.5233 18.6531 20.6038L17.75 21.3118V17.543ZM21.5 17.543H24.625V19.0117H21.5V17.543ZM13.375 29.293V20.4805H16.5V22.6836C16.5 22.8165 16.5307 22.947 16.5888 23.0611C16.647 23.1751 16.7304 23.2685 16.8301 23.3312C16.9299 23.3939 17.0423 23.4237 17.1553 23.4172C17.2683 23.4108 17.3777 23.3684 17.4719 23.2946L19 22.0961L20.5281 23.2931C20.6222 23.3668 20.7315 23.4092 20.8444 23.4157C20.9573 23.4222 21.0696 23.3926 21.1693 23.3301C21.269 23.2676 21.3525 23.1744 21.4107 23.0605C21.4689 22.9467 21.4998 22.8164 21.5 22.6836V20.4805H24.625V29.293H13.375Z"
				fill="white"
			/>
			<path
				d="M35.875 20.4805C35.4885 20.4824 35.1121 20.6245 34.797 20.8874C34.482 21.1503 34.2438 21.5211 34.115 21.9492H30.8431C30.7196 19.1141 29.858 16.3919 28.375 14.1509V9.46485H32.24C32.3874 9.95483 32.6775 10.3678 33.059 10.6308C33.4405 10.8937 33.8889 10.9898 34.3248 10.9019C34.7607 10.814 35.1562 10.5479 35.4413 10.1505C35.7264 9.75316 35.8827 9.25018 35.8827 8.73047C35.8827 8.21077 35.7264 7.70779 35.4413 7.31044C35.1562 6.9131 34.7607 6.64696 34.3248 6.55908C33.8889 6.47119 33.4405 6.56722 33.059 6.83018C32.6775 7.09314 32.3874 7.50611 32.24 7.9961H27.75C27.5842 7.9961 27.4252 8.07347 27.308 8.21119C27.1908 8.34891 27.125 8.53571 27.125 8.73047V12.536C25.7132 10.972 23.9963 9.83927 22.125 9.23719V5.0586H25.99C26.1374 5.54858 26.4275 5.96155 26.809 6.22451C27.1905 6.48748 27.6389 6.5835 28.0748 6.49562C28.5107 6.40774 28.9062 6.1416 29.1913 5.74425C29.4764 5.34691 29.6327 4.84393 29.6327 4.32422C29.6327 3.80452 29.4764 3.30154 29.1913 2.90419C28.9062 2.50684 28.5107 2.24071 28.0748 2.15283C27.6389 2.06494 27.1905 2.16097 26.809 2.42393C26.4275 2.68689 26.1374 3.09986 25.99 3.58985H21.5C21.3342 3.58985 21.1752 3.66722 21.058 3.80494C20.9408 3.94266 20.875 4.12945 20.875 4.32422V8.92215C19.6344 8.66658 18.3655 8.66658 17.125 8.92215V2.85547C17.125 2.6607 17.0591 2.47391 16.9419 2.33619C16.8247 2.19847 16.6657 2.1211 16.5 2.1211H12.01C11.8625 1.63111 11.5724 1.21814 11.1909 0.955181C10.8094 0.692219 10.3611 0.596193 9.92512 0.684076C9.48919 0.77196 9.09373 1.03809 8.80864 1.43544C8.52355 1.83279 8.36719 2.33577 8.36719 2.85547C8.36719 3.37518 8.52355 3.87816 8.80864 4.2755C9.09373 4.67285 9.48919 4.93899 9.92512 5.02687C10.3611 5.11475 10.8094 5.01873 11.1909 4.75577C11.5724 4.4928 11.8625 4.07983 12.01 3.58985H15.875V9.23719C14.0036 9.83927 12.2867 10.972 10.875 12.536V8.73047C10.875 8.53571 10.8091 8.34891 10.6919 8.21119C10.5747 8.07347 10.4157 7.9961 10.25 7.9961H5.75995C5.61252 7.50611 5.32241 7.09314 4.9409 6.83018C4.5594 6.56722 4.11106 6.47119 3.67512 6.55908C3.23919 6.64696 2.84373 6.9131 2.55864 7.31044C2.27355 7.70779 2.11719 8.21077 2.11719 8.73047C2.11719 9.25018 2.27355 9.75316 2.55864 10.1505C2.84373 10.5479 3.23919 10.814 3.67512 10.9019C4.11106 10.9898 4.5594 10.8937 4.9409 10.6308C5.32241 10.3678 5.61252 9.95483 5.75995 9.46485H9.62495V14.1509C8.14186 16.3919 7.28031 19.1141 7.15683 21.9492H3.88495C3.73752 21.4592 3.44741 21.0463 3.0659 20.7833C2.6844 20.5203 2.23606 20.4243 1.80012 20.5122C1.36419 20.6001 0.968728 20.8662 0.683639 21.2636C0.39855 21.6609 0.242187 22.1639 0.242188 22.6836C0.242187 23.2033 0.39855 23.7063 0.683639 24.1036C0.968728 24.501 1.36419 24.7671 1.80012 24.855C2.23606 24.9429 2.6844 24.8469 3.0659 24.5839C3.44741 24.3209 3.73752 23.908 3.88495 23.418H7.15683C7.28031 26.2531 8.14186 28.9753 9.62495 31.2163V35.9023H5.75995C5.61252 35.4124 5.32241 34.9994 4.9409 34.7364C4.5594 34.4735 4.11106 34.3774 3.67512 34.4653C3.23919 34.5532 2.84373 34.8193 2.55864 35.2167C2.27355 35.614 2.11719 36.117 2.11719 36.6367C2.11719 37.1564 2.27355 37.6594 2.55864 38.0568C2.84373 38.4541 3.23919 38.7202 3.67512 38.8081C4.11106 38.896 4.5594 38.8 4.9409 38.537C5.32241 38.2741 5.61252 37.8611 5.75995 37.3711H10.25C10.4157 37.3711 10.5747 37.2937 10.6919 37.156C10.8091 37.0183 10.875 36.8315 10.875 36.6367V32.8312C12.2867 34.3952 14.0036 35.5279 15.875 36.13V41.7773H12.01C11.8625 41.2874 11.5724 40.8744 11.1909 40.6114C10.8094 40.3485 10.3611 40.2524 9.92512 40.3403C9.48919 40.4282 9.09373 40.6943 8.80864 41.0917C8.52355 41.489 8.36719 41.992 8.36719 42.5117C8.36719 43.0314 8.52355 43.5344 8.80864 43.9318C9.09373 44.3291 9.48919 44.5952 9.92512 44.6831C10.3611 44.771 10.8094 44.675 11.1909 44.412C11.5724 44.1491 11.8625 43.7361 12.01 43.2461H16.5C16.6657 43.2461 16.8247 43.1687 16.9419 43.031C17.0591 42.8933 17.125 42.7065 17.125 42.5117V36.4451C18.3655 36.7006 19.6344 36.7006 20.875 36.4451V41.043C20.875 41.2377 20.9408 41.4245 21.058 41.5623C21.1752 41.7 21.3342 41.7773 21.5 41.7773H25.99C26.1374 42.2673 26.4275 42.6803 26.809 42.9433C27.1905 43.2062 27.6389 43.3023 28.0748 43.2144C28.5107 43.1265 28.9062 42.8604 29.1913 42.463C29.4764 42.0657 29.6327 41.5627 29.6327 41.043C29.6327 40.5233 29.4764 40.0203 29.1913 39.6229C28.9062 39.2256 28.5107 38.9595 28.0748 38.8716C27.6389 38.7837 27.1905 38.8797 26.809 39.1427C26.4275 39.4056 26.1374 39.8186 25.99 40.3086H22.125V36.13C23.9963 35.5279 25.7132 34.3952 27.125 32.8312V36.6367C27.125 36.8315 27.1908 37.0183 27.308 37.156C27.4252 37.2937 27.5842 37.3711 27.75 37.3711H32.24C32.3874 37.8611 32.6775 38.2741 33.059 38.537C33.4405 38.8 33.8889 38.896 34.3248 38.8081C34.7607 38.7202 35.1562 38.4541 35.4413 38.0568C35.7264 37.6594 35.8827 37.1564 35.8827 36.6367C35.8827 36.117 35.7264 35.614 35.4413 35.2167C35.1562 34.8193 34.7607 34.5532 34.3248 34.4653C33.8889 34.3774 33.4405 34.4735 33.059 34.7364C32.6775 34.9994 32.3874 35.4124 32.24 35.9023H28.375V31.2163C29.858 28.9753 30.7196 26.2531 30.8431 23.418H34.115C34.2301 23.7978 34.4319 24.1331 34.6982 24.3873C34.9646 24.6414 35.2853 24.8047 35.6252 24.8592C35.9652 24.9137 36.3114 24.8573 36.626 24.6963C36.9405 24.5353 37.2114 24.2757 37.4089 23.946C37.6064 23.6164 37.723 23.2292 37.746 22.827C37.7689 22.4247 37.6973 22.0228 37.539 21.6651C37.3807 21.3074 37.1417 21.0077 36.8482 20.7988C36.5548 20.5899 36.2181 20.4798 35.875 20.4805ZM34 7.9961C34.1236 7.9961 34.2444 8.03917 34.3472 8.11986C34.45 8.20056 34.5301 8.31525 34.5774 8.44944C34.6247 8.58363 34.6371 8.73129 34.6129 8.87374C34.5888 9.0162 34.5293 9.14705 34.4419 9.24976C34.3545 9.35246 34.2431 9.4224 34.1219 9.45074C34.0006 9.47907 33.875 9.46453 33.7608 9.40895C33.6466 9.35336 33.549 9.25924 33.4803 9.13847C33.4116 9.0177 33.375 8.87572 33.375 8.73047C33.375 8.53571 33.4408 8.34891 33.558 8.21119C33.6752 8.07347 33.8342 7.9961 34 7.9961ZM27.75 3.58985C27.8736 3.58985 27.9944 3.63292 28.0972 3.71361C28.2 3.79431 28.2801 3.909 28.3274 4.04319C28.3747 4.17738 28.3871 4.32504 28.3629 4.46749C28.3388 4.60995 28.2793 4.7408 28.1919 4.8435C28.1045 4.94621 27.9931 5.01615 27.8719 5.04449C27.7506 5.07282 27.625 5.05828 27.5108 5.0027C27.3966 4.94711 27.299 4.85299 27.2303 4.73222C27.1616 4.61145 27.125 4.46947 27.125 4.32422C27.125 4.12945 27.1908 3.94266 27.308 3.80494C27.4252 3.66722 27.5842 3.58985 27.75 3.58985ZM10.25 3.58985C10.1263 3.58985 10.0055 3.54678 9.90272 3.46608C9.79994 3.38539 9.71983 3.2707 9.67253 3.13651C9.62523 3.00232 9.61285 2.85466 9.63696 2.7122C9.66108 2.56975 9.7206 2.4389 9.80801 2.33619C9.89542 2.23349 10.0068 2.16355 10.128 2.13521C10.2493 2.10687 10.3749 2.12142 10.4891 2.177C10.6033 2.23258 10.7009 2.32671 10.7696 2.44748C10.8383 2.56824 10.875 2.71023 10.875 2.85547C10.875 3.05024 10.8091 3.23703 10.6919 3.37475C10.5747 3.51248 10.4157 3.58985 10.25 3.58985ZM3.99995 9.46485C3.87634 9.46485 3.7555 9.42178 3.65272 9.34108C3.54994 9.26039 3.46983 9.1457 3.42253 9.01151C3.37523 8.87732 3.36285 8.72966 3.38696 8.5872C3.41108 8.44475 3.47061 8.3139 3.55801 8.21119C3.64542 8.10849 3.75679 8.03855 3.87802 8.01021C3.99926 7.98187 4.12493 7.99642 4.23913 8.052C4.35334 8.10758 4.45095 8.20171 4.51962 8.32248C4.5883 8.44324 4.62495 8.58523 4.62495 8.73047C4.62495 8.92524 4.55911 9.11203 4.4419 9.24976C4.32469 9.38748 4.16571 9.46485 3.99995 9.46485ZM3.99995 37.3711C3.87634 37.3711 3.7555 37.328 3.65272 37.2473C3.54994 37.1666 3.46983 37.0519 3.42253 36.9178C3.37523 36.7836 3.36285 36.6359 3.38696 36.4935C3.41108 36.351 3.47061 36.2201 3.55801 36.1174C3.64542 36.0147 3.75679 35.9448 3.87802 35.9165C3.99926 35.8881 4.12493 35.9027 4.23913 35.9583C4.35334 36.0138 4.45095 36.108 4.51962 36.2287C4.5883 36.3495 4.62495 36.4915 4.62495 36.6367C4.62495 36.8315 4.55911 37.0183 4.4419 37.156C4.32469 37.2937 4.16571 37.3711 3.99995 37.3711ZM10.25 43.2461C10.1263 43.2461 10.0055 43.203 9.90272 43.1223C9.79994 43.0416 9.71983 42.9269 9.67253 42.7928C9.62523 42.6586 9.61285 42.5109 9.63696 42.3685C9.66108 42.226 9.7206 42.0951 9.80801 41.9924C9.89542 41.8897 10.0068 41.8198 10.128 41.7915C10.2493 41.7631 10.3749 41.7777 10.4891 41.8333C10.6033 41.8888 10.7009 41.983 10.7696 42.1037C10.8383 42.2245 10.875 42.3665 10.875 42.5117C10.875 42.7065 10.8091 42.8933 10.6919 43.031C10.5747 43.1687 10.4157 43.2461 10.25 43.2461ZM27.75 40.3086C27.8736 40.3086 27.9944 40.3517 28.0972 40.4324C28.2 40.5131 28.2801 40.6278 28.3274 40.7619C28.3747 40.8961 28.3871 41.0438 28.3629 41.1862C28.3388 41.3287 28.2793 41.4596 28.1919 41.5623C28.1045 41.665 27.9931 41.7349 27.8719 41.7632C27.7506 41.7916 27.625 41.777 27.5108 41.7214C27.3966 41.6659 27.299 41.5717 27.2303 41.451C27.1616 41.3302 27.125 41.1882 27.125 41.043C27.125 40.8482 27.1908 40.6614 27.308 40.5237C27.4252 40.386 27.5842 40.3086 27.75 40.3086ZM34 35.9023C34.1236 35.9023 34.2444 35.9454 34.3472 36.0261C34.45 36.1068 34.5301 36.2215 34.5774 36.3557C34.6247 36.4899 34.6371 36.6375 34.6129 36.78C34.5888 36.9224 34.5293 37.0533 34.4419 37.156C34.3545 37.2587 34.2431 37.3287 34.1219 37.357C34.0006 37.3853 33.875 37.3708 33.7608 37.3152C33.6466 37.2596 33.549 37.1655 33.4803 37.0447C33.4116 36.924 33.375 36.782 33.375 36.6367C33.375 36.442 33.4408 36.2552 33.558 36.1174C33.6752 35.9797 33.8342 35.9023 34 35.9023ZM2.12495 23.418C2.00134 23.418 1.8805 23.3749 1.77772 23.2942C1.67494 23.2135 1.59483 23.0988 1.54753 22.9646C1.50022 22.8304 1.48785 22.6828 1.51196 22.5403C1.53608 22.3979 1.5956 22.267 1.68301 22.1643C1.77042 22.0616 1.88178 21.9917 2.00302 21.9633C2.12426 21.935 2.24993 21.9495 2.36413 22.0051C2.47834 22.0607 2.57595 22.1548 2.64462 22.2756C2.7133 22.3964 2.74995 22.5384 2.74995 22.6836C2.74995 22.8784 2.68411 23.0652 2.5669 23.2029C2.44969 23.3406 2.29071 23.418 2.12495 23.418ZM19 35.168C16.8985 35.168 14.8443 34.4358 13.097 33.064C11.3497 31.6922 9.98792 29.7424 9.18373 27.4612C8.37955 25.1799 8.16914 22.6697 8.57911 20.248C8.98908 17.8263 10.001 15.6018 11.4869 13.8558C12.9729 12.1098 14.8661 10.9208 16.9271 10.4391C18.9882 9.9574 21.1245 10.2046 23.066 11.1495C25.0074 12.0945 26.6668 13.6946 27.8343 15.7477C29.0018 17.8007 29.625 20.2144 29.625 22.6836C29.6218 25.9935 28.5014 29.1668 26.5095 31.5073C24.5176 33.8478 21.8169 35.1643 19 35.168ZM35.875 23.418C35.7513 23.418 35.6305 23.3749 35.5277 23.2942C35.4249 23.2135 35.3448 23.0988 35.2975 22.9646C35.2502 22.8304 35.2378 22.6828 35.262 22.5403C35.2861 22.3979 35.3456 22.267 35.433 22.1643C35.5204 22.0616 35.6318 21.9917 35.753 21.9633C35.8743 21.935 35.9999 21.9495 36.1141 22.0051C36.2283 22.0607 36.3259 22.1548 36.3946 22.2756C36.4633 22.3964 36.5 22.5384 36.5 22.6836C36.5 22.8784 36.4341 23.0652 36.3169 23.2029C36.1997 23.3406 36.0407 23.418 35.875 23.418Z"
				fill="white"
			/>
		</svg>
	);
};

export default Logistic;
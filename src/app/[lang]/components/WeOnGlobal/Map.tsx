import Image from 'next/image';

const Map = () => {
	return (
		<article className="pt-8 px-5">
			<div className="w-full relative aspect-w-16 aspect-h-9">
				<Image
					src='/assets/images/we-on-global/EarthMap.png'
					fill={true}
					alt="earth-map"
					className="object-contain h-full w-full absolute top-0 left-0 transition z-[-1]"
				/>
			</div>
		</article>
	);
};

export default Map;

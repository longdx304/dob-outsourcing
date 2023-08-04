import { FC } from 'react';
import { IMenuData } from './Content';
import ArrowDown from '@public/assets/icon/ArrowDown';
import Select from '@/components/Select';

interface IMenuProps {
	data: IMenuData[];
	active: string;
	setActive: (key: string) => void;
}
const MenuItem: FC<IMenuProps> = ({ data, active, setActive }) => {
	return (
		<>
			{/* UI Desktop */}
			<article className="desktop:flex mobile:hidden py-12 items-center justify-between relative">
				{data.map((item, index) => (
					<div
						key={index}
						onClick={() => setActive(item.key)}
						className="flex items-center justify-center h-[125px] gap-8 w-1/6 
					hover:cursor-pointer group
					transition-all duration-300 delay-500 overflow-hidden"
					>
						<div
							className={`flex flex-col justify-center items-center gap-2 h-full w-full
						relative before:absolute rounded-lg
						${
							active === item.key
								? 'before:rounded-lg before:opacity-1 before:translate-y[0] before:bg-white before:w-full before:h-full before:rounded-lg before:z-[-1] before:translate-y-[0] before:transition-all before:duration-500 before:inset-0'
								: 'group-hover:scale-[1.1] before:opacity-0 before:translate-y-[-20px]'
						}`}
						>
							<div
								className={`${
									active === item.key ? 'stroke-primary' : 'stroke-white'
								}`}
							>
								{item.icon}
							</div>
							<div
								className={`body-text-1 regular ${
									active === item.key && 'text-primary'
								}`}
							>
								{item.value}
							</div>
							<ArrowDown
								className={`transition-all duration-300 ${
									active === item.key ? 'opacity-1' : 'opacity-0'
								}`}
							/>
						</div>
					</div>
				))}
			</article>
			{/* UI Mobile & Tablet */}
			<article className="desktop:hidden mobile:block py-12 relative mx-auto max-w-[300px]">
				<Select
					className="w-[200px]"
					options={data}
					placeholder="Select a item"
					onChange={(value: string) => setActive(value)}
					defaultValue={active}
				/>
			</article>
		</>
	);
};

export default MenuItem;

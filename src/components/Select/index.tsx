'use client';
import { FC } from 'react';
import {
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Select as SelectUI,
} from '../ui/select';

interface IProps {
	className?: string;
	options: any[];
	placeholder?: string;
	onChange: (value: string) => void;
	defaultValue: string;
}

const Select: FC<IProps> = ({
	className,
	options,
	placeholder = 'Select a item',
	onChange,
	defaultValue,
}) => {
	return (
		<SelectUI
			onValueChange={(value: any) => onChange(value)}
			defaultValue={defaultValue}
		>
			<SelectTrigger className="min-w-[200px]">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent className="bg-white">
				{options.map((item: any) => {
					return (
						<SelectItem
							value={item.key}
							key={item.key}
							className="hover:cursor-pointer hover:bg-slate-50"
						>
							{item.value}
						</SelectItem>
					);
				})}
			</SelectContent>
		</SelectUI>
	);
};

export default Select;

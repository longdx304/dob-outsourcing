'use client';
import { ILanguageProps } from '@/lib/types';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft } from '@/lib/animation';
import { Input } from '../../ui/input';
import { footer } from '@public/locales/footer';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';
import { sendContactForm } from '@/lib/api';
import { toast } from 'react-hot-toast';

export interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
	isLoading: boolean;
}

const Right: FC<ILanguageProps> = ({ lang }) => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		message: '',
		isLoading: false,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormData((prevData) => ({
			...prevData,
			isLoading: true,
		}));
		try {
			await sendContactForm(formData);
			toast.success('Message sent successfully');
			setFormData({
				name: '',
				email: '',
				phone: '',
				message: '',
				isLoading: false,
			});
		} catch (error) {
			console.log('error:', error);
			setFormData((prevData) => ({
				...prevData,
				isLoading: false,
			}));
		}
	};

	return (
		<motion.form
			initial="hidden"
			whileInView="visible"
			variants={fadeInLeft}
			className="desktop:w-1/2 mobile:w-full text-light flex flex-col justify-start items-center gap-6"
			onSubmit={handleSubmit}
		>
			<section className="flex flex-col desktop:hidden mobile:text-center">
				<p className="h1 bold">{footer[lang].title}</p>
				<p className="pt-2 body-text-1 regular">{footer[lang].description}</p>
			</section>
			{/* <form action="" className='w-full'> */}
			<div className="flex flex-col justify-start items-start gap-2 w-full">
				<p className="body-text-1 regular">{footer[lang].title_name}</p>
				<Input
					className="w-full"
					type="text"
					id="name"
					value={formData.name}
					placeholder={footer[lang].plc_name}
					onChange={handleChange}
				/>
			</div>
			<div className="flex flex-col justify-start items-start gap-2 w-full">
				<p className="body-text-1 regular">{footer[lang].title_email}</p>
				<Input
					className="w-full"
					type="email"
					id="email"
					value={formData.email}
					placeholder={footer[lang].plc_email}
					onChange={handleChange}
				/>
			</div>
			<div className="flex flex-col justify-start items-start gap-2 w-full">
				<p className="body-text-1 regular">{footer[lang].title_phone}</p>
				<Input
					className="w-full"
					type="text"
					id="phone"
					value={formData.phone}
					placeholder={footer[lang].plc_phone}
					onChange={handleChange}
				/>
			</div>
			<div className="flex flex-col justify-start items-start gap-2 w-full">
				<p className="body-text-1 regular">{footer[lang].title_message}</p>
				<Textarea
					id="message"
					value={formData.message}
					className="w-full h-[150px] text-dark"
					placeholder={footer[lang].plc_message}
					onChange={handleChange}
				/>
			</div>
			<Button
				className="bg-secondary"
				type="submit"
				disabled={
					formData.isLoading ||
					!formData.name ||
					!formData.email ||
					!formData.phone ||
					!formData.message
				}
			>
				{formData.isLoading ? 'Loading...' : footer[lang].btn_send}
			</Button>
		</motion.form>
	);
};

export default Right;

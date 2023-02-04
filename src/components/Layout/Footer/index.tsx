import { InstagramIcon } from "@/components/Icons";
import Link from "next/link";
import { memo } from "react";

const Footer = () => (
	<footer className='mt-4 border-t py-8 px-8 lg:px-12 col-start-2 col-span-2'>
		<div
			id='social-icons'
			className='w-full flex items-center justify-between gap-2'>
			<p className='text-black lg:text-xl'> @moragemou.dance.students </p>
			<Link
				href='https://www.instagram.com/moragemou.dance.students/'
				target='_blank'
				className='text-2xl text-black opacity-80 hover:opacity-100 transition-opacity'>
				<InstagramIcon className='w-8 h-8' />
			</Link>
		</div>
	</footer>
);

export default memo(Footer);
export { Footer as FooterNotMemoized };

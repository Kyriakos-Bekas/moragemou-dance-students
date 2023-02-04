import localFont from "@next/font/local";
import clsx from "clsx";
const delaGothic = localFont({ src: "../../fonts/DelaGothicOne-Regular.ttf" });

type BodyElement = {
	type: "text" | "image" | "video" | "link" | "list";
	content: string;
	items?: string[];
	options?: "adjacent";
};

export type ArticleProps = {
	title: string;
	body: BodyElement[];
	author: string;
	date: string;
};

const Article = ({ title, body, date, author }: ArticleProps) => {
	return (
		<article className='relative mt-12 lg:mb-16 pt-1 border-b-4 border-b-black'>
			<div id='meta' className='mb-4'>
				<span
					className={clsx(
						delaGothic.className,
						"py-1 px-2 bg-black text-white text-right text-xs"
					)}>
					{date}
				</span>
			</div>
			{title && <h1 className='mb-2 text-xl font-semibold'>{title}</h1>}

			{body.map((element, index) => {
				switch (element.type) {
					case "text":
						return (
							<p
								className={element.options === "adjacent" ? "" : "mt-4"}
								key={index}>
								{element.content}
							</p>
						);
					case "image":
						return <img src={element.content} key={index} />;
					case "list":
						return (
							<ul className='pl-4' key={index}>
								{element.items?.map((item, index) => (
									<li className='list-disc' key={index}>
										{item}
									</li>
								))}
							</ul>
						);
					default:
						return null;
				}
			})}

			<p className='mt-8 mb-6 ml-auto lg:max-w-[60ch] text-right'>{author}</p>
		</article>
	);
};

export default Article;

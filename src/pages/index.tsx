import Article, { ArticleProps } from "@/components/Article";
import Footer from "@/components/Layout/Footer";
import MediaColumn from "@/components/MediaColumn";
import localFont from "@next/font/local";
import clsx from "clsx";
import Head from "next/head";
import articles from "../../data/articles.json";

const delaGothic = localFont({ src: "../fonts/DelaGothicOne-Regular.ttf" });

export default function Home() {
	return (
		<>
			<Head>
				<title>Starter App</title>
				<meta name='description' content='Starter App Description' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div id='content' className='lg:grid grid-cols-3'>
				<MediaColumn />

				<main className='pb-6 lg:pb-8 px-4 lg:px-12 max-w-5xl col-span-2'>
					<header className='mb-6 lg:mb-8 pt-4 pb-2'>
						<p className='pb-2 border-b text-gray-500 inline-block'>
							Σπουδάστριες/ες/α Ανώτερης Επαγγελματικής Σχολής Χορού Μοραγέμου
						</p>
					</header>

					<h1 className={clsx(delaGothic.className, "text-5xl text-justify")}>
						ΑΜΕΣΗ ΑΠΟΣΥΡΣΗ ΠΔ/85 2022
					</h1>

					{articles.map((article) => (
						<Article key={article.id} {...(article as ArticleProps)} />
					))}
				</main>

				<Footer />
			</div>
		</>
	);
}

import { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		document.body.classList.add("dark");
	}, []);

	return (
		<>
			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
				<div className="max-w-lg mt-5 text-center mx-auto">
					<p className="text-md text-gray-500 xs:text-sm">
						A{" "}
						<strong className="text-gray-300">comprehensive</strong>{" "}
						and{" "}
						<strong className="text-gray-300">
							user-friendly boilerplate
						</strong>
						, designed to expedite the development process of ,
						providing developers with an extensive range of{" "}
						<strong className="text-gray-300">components</strong>{" "}
						and <strong className="text-gray-300">features</strong>.
					</p>
				</div>

				<div className="mt-5 flex justify-center items-center gap-1 sm:gap-x-2">
					<span className="text-sm font-bold text-gray-900 dark:text-white">
						Vite
					</span>
					<svg
						className="h-5 w-5 text-gray-300 dark:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							d="M6 13L10 3"
							stroke="currentColor"
							strokeLinecap="round"
						/>
					</svg>
					<span className="text-sm font-bold text-gray-900 dark:text-white">
						React
					</span>
					<svg
						className="h-5 w-5 text-gray-300 dark:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							d="M6 13L10 3"
							stroke="currentColor"
							strokeLinecap="round"
						/>
					</svg>
					<span className="text-sm font-bold text-gray-900 dark:text-white">
						Express
					</span>
					<svg
						className="h-5 w-5 text-gray-300 dark:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							d="M6 13L10 3"
							stroke="currentColor"
							strokeLinecap="round"
						/>
					</svg>
					<span className="text-sm font-bold text-gray-900 dark:text-white">
						Node JS
					</span>
					<svg
						className="h-5 w-5 text-gray-300 dark:text-gray-600"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							d="M6 13L10 3"
							stroke="currentColor"
							strokeLinecap="round"
						/>
					</svg>
					<span className="text-sm font-bold text-gray-900 dark:text-white">
						Tailwind CSS
					</span>
				</div>
			</div>
		</>
	);
};

export default Hero;

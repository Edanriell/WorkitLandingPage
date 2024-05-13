import { FC, ReactNode } from "react";

type BaseLayoutProps = {
	children?: ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
	return (
		<main className={"bg-white-50"}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="375"
				height="482"
				viewBox="0 0 375 482"
				fill="none"
				preserveAspectRatio="xMinYMin slice"
				className={"w-full absolute top-0 left-0"}
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 0H375.303V464C375.303 464 282.249 481.707 188.173 481.707C94.0966 481.707 0 464 0 464V0Z"
					fill="#24053E"
				/>
			</svg>
			{children}
		</main>
	);
};

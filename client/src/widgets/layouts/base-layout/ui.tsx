import { FC, ReactNode } from "react";

type BaseLayoutProps = {
	children?: ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
	return (
		<main className={"bg-white-50 relative z-10"}>
			<svg
				width="375"
				height="482"
				viewBox="0 0 375 482"
				fill="none"
				preserveAspectRatio="none"
				className={"w-full absolute top-0 left-0 block min-[768px]:hidden z-10"}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 0H375.303V464C375.303 464 282.249 481.707 188.173 481.707C94.0966 481.707 0 464 0 464V0Z"
					fill="#24053E"
				/>
			</svg>
			<svg
				width="768"
				height="541"
				viewBox="0 0 768 541"
				fill="none"
				preserveAspectRatio="none"
				className={"w-full absolute top-0 left-0 hidden min-[768px]:block z-10"}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 0H768V504C768 504 577.579 540.236 385.067 540.236C192.554 540.236 0 504 0 504V0Z"
					fill="#24053E"
				/>
			</svg>
			<svg
				width="1440"
				height="730"
				viewBox="0 0 1440 730"
				fill="none"
				preserveAspectRatio="none"
				className={"w-full absolute top-0 left-0 hidden min-[1440px]:block z-10"}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 0H1440V662C1440 662 1082.96 730 722 730C361.039 730 0 662 0 662V0Z"
					fill="#24053E"
				/>
			</svg>
			{children}
		</main>
	);
};

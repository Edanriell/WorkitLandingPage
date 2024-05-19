import { FC } from "react";
import Image from "next/image";

import PersonImageMobileSrc from "./assets/person-mobile.png";

export const ApplySection: FC = () => {
	return (
		<section
			className={
				"container mt-[17.2rem] min-[768px]:mt-[20.4rem] flex flex-col items-center relative"
			}
		>
			<div
				className={
					"rounded-full bg-spring-green-400 w-[28.1rem] h-[28.1rem] overflow-hidden object-fit flex items-end mb-[-5.3rem] min-[768px]:self-start min-[768px]:mb-[-13rem]"
				}
			>
				<Image
					width={265}
					height={267}
					src={PersonImageMobileSrc}
					alt={"Image of a person"}
					className={"mb-[-0.5rem]"}
				/>
			</div>
			<div
				className={
					"w-full bg-violet-950 px-[3.1rem] py-[3.2rem] flex flex-col items-center min-[768px]:ml-[17.5rem] min-[768px]:w-auto min-[768px]:pt-[4.8rem] min-[768px]:px-[5.6rem] min-[768px]:pb-[5.6rem]"
				}
			>
				<h2
					className={
						"font-fraunces144pt font-semibold text-[3.2rem] min-[768px]:text-[4.8rem] leading-[150%] min-[768px]:leading-[117%] text-center min-[768px]:self-start text-white-50 mb-[1.6rem] min-[768px]:mb-[2.4rem]"
					}
				>
					Be the first to test
				</h2>
				<p
					className={
						"font-manrope font-normal text-[1.6rem] leading-[175%] text-center text-white-50 mb-[2.4rem] min-[768px]:text-left"
					}
				>
					Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
					beta tester for our app and kickstart your company. Apply for access below and I’ll be in
					touch to schedule a call.
				</p>
				<button
					className={
						"font-manrope font-bold text-[1.6rem] min-[1440px]:text-[1.8rem] tracking-[-0.01em] text-violet-950 bg-spring-green-400 pt-[1.1rem] min-[1440px]:pt-[1.3rem] pb-[1.2rem] min-[1440px]:pb-[1.6rem] px-[2.3rem] min-[1440px]:px-[3.2rem] leading-[200%] min-[1440px]:leading-[178%] min-[768px]:self-start"
					}
					type={"button"}
				>
					Apply for access
				</button>
			</div>
			<svg
				width="221"
				height="212"
				viewBox="0 0 221 212"
				fill="none"
				className={"absolute top-[40.5rem] right-[5rem]"}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M124.904 116.341C135.719 100.896 148.649 89.1422 160.791 82.6131C172.961 76.0688 184.192 74.8417 191.759 80.14C199.325 85.4384 202.013 96.411 200.026 110.086C198.044 123.729 191.421 139.899 180.606 155.344C169.792 170.789 156.862 182.543 144.72 189.072C132.549 195.616 121.319 196.843 113.752 191.545C106.185 186.246 103.497 175.274 105.485 161.599C107.467 147.956 114.09 131.785 124.904 116.341Z"
					stroke="#44FFA1"
				/>
				<path
					d="M103.606 101.428C114.421 85.9831 127.351 74.2292 139.493 67.7002C151.664 61.1558 162.894 59.9287 170.461 65.2271C178.028 70.5254 180.715 81.498 178.728 95.1729C176.746 108.816 170.123 124.986 159.309 140.431C148.494 155.876 135.564 167.63 123.422 174.159C111.251 180.703 100.021 181.93 92.4543 176.632C84.8874 171.333 82.1996 160.361 84.1867 146.686C86.1692 133.043 92.7918 116.872 103.606 101.428Z"
					stroke="#44FFA1"
				/>
				<path
					opacity="0.75"
					d="M83.1273 87.0884C93.9424 71.6429 106.828 59.8563 118.897 53.2753C130.996 46.6778 142.122 45.3839 149.572 50.6008C157.023 55.8178 159.612 66.7148 157.551 80.341C155.494 93.933 148.826 110.072 138.011 125.518C127.195 140.963 114.31 152.75 102.241 159.331C90.1417 165.929 79.0163 167.222 71.5657 162.006C64.1151 156.789 61.526 145.892 63.5874 132.265C65.6436 118.673 72.3123 102.534 83.1273 87.0884Z"
					stroke="#44FFA1"
				/>
				<path
					opacity="0.5"
					d="M61.0103 71.6018C71.8248 56.1572 84.7551 44.4032 96.8972 37.8742C109.068 31.3298 120.298 30.1027 127.865 35.4011C135.432 40.6994 138.119 51.672 136.132 65.3469C134.15 78.9898 127.527 95.1604 116.713 110.605C105.898 126.05 92.9679 137.804 80.8259 144.333C68.6553 150.877 57.4252 152.104 49.8583 146.806C42.2915 141.507 39.6036 130.535 41.5907 116.86C43.5732 103.217 50.1959 87.0465 61.0103 71.6018Z"
					stroke="#44FFA1"
				/>
				<path
					opacity="0.25"
					d="M39.7123 56.6888C50.5274 41.2433 63.4127 29.4567 75.4817 22.8758C87.5811 16.2783 98.7065 14.9843 106.157 20.2013C113.608 25.4183 116.197 36.3152 114.135 49.9414C112.079 63.5335 105.411 79.673 94.5955 95.1184C83.7804 110.564 70.8951 122.351 58.8261 128.931C46.7267 135.529 35.6013 136.823 28.1507 131.606C20.7001 126.389 18.1109 115.492 20.1723 101.866C22.2285 88.2738 28.8973 72.1343 39.7123 56.6888Z"
					stroke="#44FFA1"
				/>
			</svg>
		</section>
	);
};

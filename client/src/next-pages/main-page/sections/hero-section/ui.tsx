import { FC } from "react";
import Image from "next/image";

import PhoneMobileImageSrc from "./assets/phone-mobile.png";
import PhoneTabletImageSrc from "./assets/phone-tablet.png";
import PhoneDesktopImageSrc from "./assets/phone-desktop.png";

export const HeroSection: FC = () => {
	return (
		<section className={"bg-red-800 z-10"}>
			<div className={"container flex flex-col items-center z-20 relative"}>
				<h2
					className={
						"font-fraunces144pt font-semibold text-[5rem] min-[768px]:text-[6rem] text-center text-white-50 mt-[3.2rem] min-[768px]:mt-[2.4rem] mb-[4rem] min-[768px]:mb-[3.9rem] leading-[100%] min-[768px]:max-w-[40rem]"
					}
				>
					Data{" "}
					<span
						className={
							"inline-block lowercase after:block after:w-full after:h-[0.3rem] after:bg-spring-green-400 after:absolute relative"
						}
					>
						tailored
					</span>{" "}
					to your needs.
				</h2>
				<button
					type={"button"}
					className={
						"font-manrope font-bold text-[1.6rem] tracking-[-0.01em] text-violet-950 bg-spring-green-400 pt-[1.1rem] pb-[1.2rem] px-[2.3rem] leading-[200%]"
					}
				>
					Learn more
				</button>
				<Image
					width={320}
					height={184}
					src={PhoneMobileImageSrc}
					alt={"Image of smartphone"}
					className={"block min-[768px]:hidden mt-[6.4rem]"}
				/>
				<Image
					width={514}
					height={296}
					src={PhoneTabletImageSrc}
					alt={"Image of smartphone"}
					className={"hidden min-[768px]:block min-[1440px]:hidden mt-[5.5rem]"}
				/>
				<Image
					width={767}
					height={441}
					src={PhoneDesktopImageSrc}
					alt={"Image of smartphone"}
					className={"hidden min-[1440px]:block"}
				/>
			</div>
		</section>
	);
};

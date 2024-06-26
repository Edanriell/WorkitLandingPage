"use client";
/* eslint-disable import/no-internal-modules */

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

import { Button } from "@shared/ui";

import PhoneDesktopImageSrc from "./assets/phone-desktop.png";
import PhoneMobileImageSrc from "./assets/phone-mobile.png";
import PhoneTabletImageSrc from "./assets/phone-tablet.png";

export const HeroSection: FC = () => {
	return (
		<section className={"bg-white-pointer-50 z-10"}>
			<div className={"container flex flex-col items-center z-20 relative"}>
				<motion.h2
					initial={{ opacity: 0, translateX: 25 }}
					whileInView={{ opacity: 1, translateX: 0, transition: { delay: 0.25, duration: 0.25 } }}
					className={
						"font-fraunces144pt font-semibold text-[5rem] min-[768px]:text-[6rem] min-[1440px]:text-[8rem] text-center text-white-50 mt-[3.2rem] min-[768px]:mt-[2.4rem] min-[1440px]:mt-[0rem] mb-[4rem] min-[768px]:mb-[3.9rem] min-[1440px]:mb-[3.7rem] leading-[100%] min-[768px]:max-w-[40rem] min-[1440px]:max-w-[53rem]"
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
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, translateX: -25 }}
					whileInView={{ opacity: 1, translateX: 0, transition: { delay: 0.25, duration: 0.25 } }}
				>
					<Button buttonType={"boxy"}>Learn more</Button>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, translateY: -25 }}
					whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.5, duration: 0.25 } }}
				>
					<Image
						width={320}
						height={184}
						src={PhoneMobileImageSrc}
						alt={"Image of smartphone"}
						className={"block min-[768px]:hidden mt-[6.4rem] ml-[2rem] mr-[0.3rem]"}
					/>
					<Image
						width={514}
						height={296}
						src={PhoneTabletImageSrc}
						alt={"Image of smartphone"}
						className={
							"hidden min-[768px]:block min-[1440px]:hidden mt-[5.5rem] ml-[11.2rem] mr-[6.4rem]"
						}
					/>
					<Image
						width={767}
						height={441}
						src={PhoneDesktopImageSrc}
						alt={"Image of smartphone"}
						className={"hidden min-[1440px]:block mt-[5rem] ml-[19.6rem] mr-[14.7rem]"}
					/>
				</motion.div>
			</div>
		</section>
	);
};

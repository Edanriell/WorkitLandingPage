import { FC } from "react";
import Image from "next/image";

import PersonImageMobileSrc from "./assets/person-mobile.png";

export const ApplySection: FC = () => {
	return (
		<section className={"container mt-[17.2rem] flex flex-col items-center"}>
			<div
				className={
					"rounded-full bg-spring-green-400 w-[28.1rem] h-[28.1rem] overflow-hidden object-fit flex items-end"
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
			<div className={"w-full bg-violet-950 px-[3.1rem] py-[3.2rem] flex flex-col items-center"}>
				<h2
					className={
						"font-fraunces144pt font-semibold text-[3.2rem] leading-[150%] text-center text-white-50 mb-[1.6rem]"
					}
				>
					Be the first to test
				</h2>
				<p
					className={
						"font-manrope font-normal text-[1.6rem] leading-[175%] text-center text-white-50 mb-[2.4rem]"
					}
				>
					Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
					beta tester for our app and kickstart your company. Apply for access below and I’ll be in
					touch to schedule a call.
				</p>
				<button
					className={
						"font-manrope font-bold text-[1.6rem] min-[1440px]:text-[1.8rem] tracking-[-0.01em] text-violet-950 bg-spring-green-400 pt-[1.1rem] min-[1440px]:pt-[1.3rem] pb-[1.2rem] min-[1440px]:pb-[1.6rem] px-[2.3rem] min-[1440px]:px-[3.2rem] leading-[200%] min-[1440px]:leading-[178%]"
					}
					type={"button"}
				>
					Apply for access
				</button>
			</div>
		</section>
	);
};

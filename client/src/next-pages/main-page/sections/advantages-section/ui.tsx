import { FC } from "react";

export const AdvantagesSection: FC = () => {
	return (
		<section className={"relative"}>
			<h2 className={"sr-only"}>Our advantages</h2>
			<svg
				width="375"
				height="890"
				viewBox="0 0 375 890"
				fill="none"
				preserveAspectRatio="none"
				className={"w-full absolute top-0 left-0 block min-[768px]:hidden z-10"}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 0H375V875.281C375 875.281 282.021 890 188.021 890C94.0206 890 0 875.281 0 875.281L0 0Z"
					fill="#FCF8FF"
				/>
			</svg>
			<div className={"container pt-[6.4rem] z-20 relative"}>
				<ul className={"flex flex-col items-center gap-y-[4rem]"}>
					<li className={"relative flex flex-col items-center"}>
						<div
							className={
								"w-[4.8rem] h-[4.8rem] rounded-full border-[0.1rem] border-solid border-mulled-wine-900 relative flex items-center justify-center font-fraunces144pt font-semibold text-[2rem] leading-[180%] text-center text-violet-950 mb-[2.4rem]"
							}
						>
							1
						</div>
						<div>
							<h3
								className={
									"font-fraunces144pt font-semibold mb-[1.6rem] text-[2.8rem] leading-[129%] text-center text-violet-950"
								}
							>
								Actionable insights
							</h3>
							<p
								className={
									"font-manrope font-normal text-[1.6rem] leading-[175%] text-center text-mulled-wine-900"
								}
							>
								Optimize your products, improve customer satisfaction and stay ahead of the
								competition with our product data analytics.
							</p>
						</div>
					</li>
					<li className={"relative flex flex-col items-center"}>
						<div
							className={
								"w-[4.8rem] h-[4.8rem] rounded-full border-[0.1rem] border-solid border-mulled-wine-900 relative flex items-center justify-center font-fraunces144pt font-semibold text-[2rem] leading-[180%] text-center text-violet-950 mb-[2.4rem]"
							}
						>
							2
						</div>
						<div>
							<h3
								className={
									"font-fraunces144pt font-semibold mb-[1.6rem] text-[2.8rem] leading-[129%] text-center text-violet-950"
								}
							>
								Data-driven decisions
							</h3>
							<p
								className={
									"font-manrope font-normal text-[1.6rem] leading-[175%] text-center text-mulled-wine-900"
								}
							>
								Make data-driven decisions with our product data analytics. Our AI-generated reports
								help you unlock insights hidden in your product data.
							</p>
						</div>
					</li>
					<li className={"relative flex flex-col items-center"}>
						<div
							className={
								"w-[4.8rem] h-[4.8rem] rounded-full border-[0.1rem] border-solid border-mulled-wine-900 relative flex items-center justify-center font-fraunces144pt font-semibold text-[2rem] leading-[180%] text-center text-violet-950 mb-[2.4rem]"
							}
						>
							3
						</div>
						<div>
							<h3
								className={
									"font-fraunces144pt font-semibold mb-[1.6rem] text-[2.8rem] leading-[129%] text-center text-violet-950"
								}
							>
								Always affordable
							</h3>
							<p
								className={
									"font-manrope font-normal text-[1.6rem] leading-[175%] text-center text-mulled-wine-900"
								}
							>
								Always affordable pricing that scales with your business. Get top-quality product
								data analytics services without hidden costs or unexpected fees.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

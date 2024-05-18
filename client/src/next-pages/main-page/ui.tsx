import { FC, Fragment } from "react";

import { Header, Footer } from "@/widgets";
import { HeroSection } from "./sections/hero-section";
import { AdvantagesSection } from "./sections/advantages-section";

export const MainPage: FC = () => {
	return (
		<Fragment>
			<h1 className={"sr-only"}>Workit company home page</h1>
			<Header />
			<HeroSection />
			<AdvantagesSection />
			<Footer />
		</Fragment>
	);
};

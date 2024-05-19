import { FC, Fragment } from "react";

import { Header, Footer } from "@/widgets";
import { HeroSection, AdvantagesSection } from "./sections";
import { ApplySection } from "./sections/apply-section";

export const MainPage: FC = () => {
	return (
		<Fragment>
			<h1 className={"sr-only"}>Workit company home page</h1>
			<Header />
			<HeroSection />
			<AdvantagesSection />
			<ApplySection />
			<Footer />
		</Fragment>
	);
};

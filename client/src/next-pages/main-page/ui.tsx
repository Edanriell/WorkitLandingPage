import { FC, Fragment } from "react";

import { Header, Footer } from "@/widgets";
import { HeroSection } from "./sections/hero-section";

export const MainPage: FC = () => {
	return (
		<Fragment>
			<h1 className={"sr-only"}>Workit company home page</h1>
			<Header />
			<HeroSection />
			<Footer />
		</Fragment>
	);
};

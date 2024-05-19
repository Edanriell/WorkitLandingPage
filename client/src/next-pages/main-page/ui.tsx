import { FC, Fragment } from "react";

import { Header, Footer } from "@/widgets";
import { HeroSection, AdvantagesSection, ApplySection } from "./sections";

const MainPageSections = [
	{
		Section: HeroSection
	},
	{
		Section: AdvantagesSection
	},
	{
		Section: ApplySection
	}
];

export const MainPage: FC = () => {
	return (
		<Fragment>
			<h1 className={"sr-only"}>Workit company home page</h1>
			<Header />
			{MainPageSections.map(({ Section }) => (
				<Section />
			))}
			<Footer />
		</Fragment>
	);
};

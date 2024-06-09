import { FC, Fragment } from "react";

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
			{MainPageSections.map(({ Section }, index) => (
				<Section key={index} />
			))}
		</Fragment>
	);
};

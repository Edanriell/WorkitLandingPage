import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MotionProps } from "framer-motion";

type ButtonProps = {
	buttonType: "underlined" | "boxy";
	className?: string;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	MotionProps &
	VariantProps<typeof buttonTypes>;

const buttonTypes = cva(
	"font-manrope font-bold text-[1.6rem] min-[1440px]:text-[1.8rem] tracking-[-0.01em] leading-[200%] min-[1440px]:leading-[178%]",
	{
		variants: {
			buttonType: {
				underlined:
					"text-white-50 after:block after:w-full after:h-[0.3rem] after:bg-spring-green-400 after:absolute relative",
				boxy: "text-violet-950 bg-spring-green-400 pt-[1.1rem] min-[1440px]:pt-[1.3rem] pb-[1.2rem] min-[1440px]:pb-[1.6rem] px-[2.3rem] min-[1440px]:px-[3.2rem]"
			}
		}
	}
);

function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Factory of buttons
export const Button: FC<ButtonProps> = ({ buttonType, className, children, ...props }) => {
	switch (buttonType) {
		case "underlined":
			return (
				<button type={"button"} className={cn(buttonTypes({ buttonType, className }))} {...props}>
					{children}
				</button>
			);
		case "boxy":
			return (
				<button type={"button"} className={cn(buttonTypes({ buttonType, className }))} {...props}>
					{children}
				</button>
			);
		default:
			return null;
	}
};

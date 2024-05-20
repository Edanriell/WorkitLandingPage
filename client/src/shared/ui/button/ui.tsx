"use client";

import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { MotionProps, motion } from "framer-motion";

import { cn } from "@shared/lib";

type ButtonProps = {
	buttonType: "underlined" | "boxy";
	className?: string;
	children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	MotionProps &
	VariantProps<typeof buttonTypes>;

const buttonTypes = cva(
	"font-manrope font-bold text-[1.6rem] min-[1440px]:text-[1.8rem] tracking-[-0.01em] leading-[200%] min-[1440px]:leading-[178%] relative",
	{
		variants: {
			buttonType: {
				underlined:
					"text-white-50 after:block after:w-full after:h-[0.3rem] after:bg-spring-green-400 after:absolute",
				boxy: "text-violet-950 bg-transparent pt-[0.9rem] min-[1440px]:pt-[1.1rem] pb-[1rem] min-[1440px]:pb-[1.4rem] px-[2.1rem] min-[1440px]:px-[3rem] border-[0.2rem] border-solid border-spring-green-400"
			}
		}
	}
);

// Factory of buttons
export const Button: FC<ButtonProps> = ({ buttonType, className, children, ...props }) => {
	switch (buttonType) {
		case "underlined":
			return (
				<motion.button
					type={"button"}
					className={cn(buttonTypes({ buttonType, className }))}
					{...props}
					whileHover={{ color: "#44ffa1" }}
					whileTap={{ color: "#44ffa1" }}
				>
					{children}
				</motion.button>
			);
		case "boxy":
			return (
				<motion.button
					type={"button"}
					className={cn(buttonTypes({ buttonType, className }))}
					{...props}
					whileHover={{ color: "#44ffa1", scale: 1.05 }}
					whileTap={{ color: "#44ffa1", scale: 0.95 }}
				>
					<div className={"relative z-20"}>{children}</div>
					<div className={"absolute top-0 left-0 w-full h-full bg-spring-green-400 z-10"}></div>
				</motion.button>
			);
		default:
			return null;
	}
};

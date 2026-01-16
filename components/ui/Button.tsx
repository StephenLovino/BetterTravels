"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { hoverScale } from "@/lib/animations";

interface ButtonProps {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    onClick?: () => void;
}

export default function Button({
    children,
    className,
    variant = "primary",
    onClick,
}: ButtonProps) {
    const baseStyles =
        "px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-primary text-white hover:bg-[#110B21]",
        secondary: "bg-secondary text-white hover:bg-primary",
        outline: "border border-secondary text-secondary hover:bg-secondary hover:text-white",
        ghost: "bg-transparent text-secondary hover:bg-gray-100",
    };

    return (
        <motion.button
            className={cn(baseStyles, variants[variant], className)}
            variants={hoverScale}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
}

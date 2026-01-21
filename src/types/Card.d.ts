import type { ReactNode } from "react";

interface CardProp {
    children: ReactNode;
    title: string;
    color: "blue" | "green" | "purple" | "red";
}
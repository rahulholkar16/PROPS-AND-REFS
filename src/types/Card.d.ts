import type { ReactNode } from "react";

interface CardProp {
    childern: ReactNode;
    title: string;
    color: "blue" | "green" | "purple" | "red";
}
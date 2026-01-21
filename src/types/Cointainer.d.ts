import type { ReactNode } from "react";

interface ContainerProp {
    children: ReactNode;
    layout: 'vertical' | "horizontal" | "grid";
}
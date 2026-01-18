interface ButtonProp {
    text: string;
    color: string;
    size: "small" | "large";
    onClick: () => void;
    disabled: boolean;
}
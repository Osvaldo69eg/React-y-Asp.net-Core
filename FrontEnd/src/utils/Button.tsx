import { ReactNode } from "react";

export default function Button({
    children,
    onClick,
    type = "button",
    disabled = false,
    className = "btn btn-primary",
}: buttonProps) {
    return (
        <button
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

interface buttonProps {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    disabled?: boolean;
    className?: string;
}

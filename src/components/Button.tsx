import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ButtonProps {
    to?: string;
    className?: string;
    children?: React.ReactNode;
    label?: string;
    kind: "primary" | "secondary" | "thirty" | "outline" | "create";
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const BUTTON_KINDS: Record<ButtonProps["kind"], string> = {
    primary: "bg-black text-white w-full py-2 rounded-xl text-sm hover:bg-gray-800 transition-all",
    secondary: "bg-black text-white flex-1 py-2 rounded-xl text-xs hover:bg-gray-800 transition-all",
    thirty: "bg-black text-white w-full py-2 mt-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all mb-4",
    outline: "bg-transparent text-white border rounded-[30px] border-white hover:border-[#268FE4]",
    create: "bg-[#22C55E] text-white rounded-[8px] border border-[#22C55E] hover:bg-[#5CB77D]",
};

const Button: React.FC<ButtonProps> = ({
    to,
    className = '',
    children,
    label,
    kind = "primary",
    onClick,
    type = 'button',
}) => {
    const classes = clsx("transition-all focus:outline-none", BUTTON_KINDS[kind], className);
    const content = children || label;

    if (to) {
        return (
            <Link to={to} onClick={onClick} className={clsx(classes, "block")}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes}>
            {content}
        </button>
    );
};

export default Button;

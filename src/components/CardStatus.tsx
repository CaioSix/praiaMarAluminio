import React from 'react';
import clsx from 'clsx';

interface CardStatusProps {
  princiLabel?: string;
  label?: string;
  children?: React.ReactNode;
  className?: string;
  kind: "primary" | "secondary" | "secondary-variation" | "outline";
  wordKindPrinci?: "primary" | "secondary" | "create" | "default";
  wordKindLabel?: "primary" | "secondary" | "create" | "default";
}

const CARDS_KINDS: Record<CardStatusProps["kind"], string> = {
  primary: "bg-white rounded-md p-3 flex-1 flex flex-col items-center shadow relative",
  secondary: "bg-white text-[#160A60] rounded-[8px] hover:bg-[#5C5A79] hover:text-white",
  "secondary-variation": "bg-white text-[#160A60] rounded-[8px] hover:bg-[#1E293B] hover:text-white",
  outline: "bg-transparent text-white border border-white rounded-[30px] hover:border-[#268FE4]",
};

const WORD_KINDS: Record<string, string> = {
  primary: "text-lg font-bold",
  secondary: "text-xs text-gray-600 text-center",
  create: "text-sm text-green-500",
  default: "",
};

const CardStatus: React.FC<CardStatusProps> = ({
  princiLabel,
  label,
  className = '',
  kind = "primary",
  wordKindPrinci = "default",
  wordKindLabel = "default",
  children
}) => {
  const containerClass = clsx(CARDS_KINDS[kind], className);

  return (
    <div className={containerClass}>
      {children && <div className="mb-1">{children}</div>}
      {princiLabel && <span className={WORD_KINDS[wordKindPrinci]}>{princiLabel}</span>}
      {label && <p className={WORD_KINDS[wordKindLabel]}>{label}</p>}
    </div>
  );
};

export default CardStatus;

import { cn } from "@/lib/utils";
import { StarIcon } from "./StarIcon";

export type ButtonType = "square" | "round";
export type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

interface MaterialButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  label?: string;
  showIcon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const sizeConfig = {
  xsmall: {
    padding: "px-3 py-1.5",
    gap: "gap-1",
    iconSize: 20,
    fontSize: "text-sm",
    lineHeight: "leading-5",
    letterSpacing: "tracking-[0.1px]",
    fontWeight: "font-medium",
    borderRadius: { square: "rounded-xl", round: "rounded-full" },
    pressedRadius: { square: "rounded-lg", round: "rounded-lg" },
  },
  small: {
    padding: "px-4 py-2.5",
    gap: "gap-2",
    iconSize: 20,
    fontSize: "text-sm",
    lineHeight: "leading-5",
    letterSpacing: "tracking-[0.1px]",
    fontWeight: "font-medium",
    borderRadius: { square: "rounded-xl", round: "rounded-full" },
    pressedRadius: { square: "rounded-lg", round: "rounded-lg" },
  },
  medium: {
    padding: "px-6 py-4",
    gap: "gap-2",
    iconSize: 24,
    fontSize: "text-base",
    lineHeight: "leading-6",
    letterSpacing: "tracking-[0.15px]",
    fontWeight: "font-medium",
    borderRadius: { square: "rounded-2xl", round: "rounded-full" },
    pressedRadius: { square: "rounded-xl", round: "rounded-xl" },
  },
  large: {
    padding: "px-12 py-8",
    gap: "gap-3",
    iconSize: 32,
    fontSize: "text-2xl",
    lineHeight: "leading-8",
    letterSpacing: "tracking-normal",
    fontWeight: "font-normal",
    borderRadius: { square: "rounded-[28px]", round: "rounded-full" },
    pressedRadius: { square: "rounded-2xl", round: "rounded-2xl" },
  },
  xlarge: {
    padding: "px-16 py-12",
    gap: "gap-4",
    iconSize: 40,
    fontSize: "text-[32px]",
    lineHeight: "leading-10",
    letterSpacing: "tracking-normal",
    fontWeight: "font-normal",
    borderRadius: { square: "rounded-[28px]", round: "rounded-full" },
    pressedRadius: { square: "rounded-2xl", round: "rounded-2xl" },
  },
};

export function MaterialButton({
  type = "square",
  size = "medium",
  label = "Label",
  showIcon = true,
  disabled = false,
  onClick,
  className,
}: MaterialButtonProps) {
  const config = sizeConfig[size];
  const borderRadius = config.borderRadius[type];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center",
        borderRadius,
        disabled
          ? "bg-[rgba(26,27,32,0.10)] cursor-not-allowed"
          : "bg-[#465D91] hover:bg-[#465D91] focus:bg-[#465D91] active:bg-[#465D91]",
        "relative overflow-hidden",
        "transition-all duration-200",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center relative z-10",
          config.padding,
          config.gap,
          disabled && "opacity-38"
        )}
      >
        {showIcon && (
          <StarIcon
            size={config.iconSize}
            className={disabled ? "text-[#1A1B20]" : "text-white"}
          />
        )}
        <span
          className={cn(
            config.fontSize,
            config.lineHeight,
            config.letterSpacing,
            config.fontWeight,
            disabled ? "text-[#1A1B20]" : "text-white"
          )}
        >
          {label}
        </span>
      </div>
      {!disabled && (
        <>
          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-[0.08] transition-opacity duration-200" />
          <div className="absolute inset-0 bg-white opacity-0 focus-visible:opacity-[0.10] transition-opacity duration-200" />
          <div className="absolute inset-0 bg-white opacity-0 active:opacity-[0.08] transition-opacity duration-200" />
        </>
      )}
    </button>
  );
}

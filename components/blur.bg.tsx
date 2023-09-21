import { cn } from "@/utils/cn";

interface Props {
  className?: string;
  bg?: string;
  width?: string;
  height?: string;
  blur?: string;
  opacity?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export const BlurBG: React.FC<Props> = ({
  className = "",
  bg = "bg-[#0070f3]",
  width = "w-[600px]",
  height = "h-[600px]",
  blur = "blur-3xl",
  opacity = "opacity-10",
  left = "",
  right = "",
  top = "",
  bottom = "",
}) => {
  return (
    <div
      className={cn(
        `rounded-full filter absolute`,
        bg,
        width,
        height,
        blur,
        opacity,
        top,
        right,
        bottom,
        left,
        className
      )}
    ></div>
  );
};

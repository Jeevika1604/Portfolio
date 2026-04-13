import React from "react";
import { cn } from "../../utils/cn";

export const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "pause-on-hover": pauseOnHover,
              "flex-row": !vertical,
              "flex-col": vertical,
            })}
            style={{
               animation: `${vertical ? 'marquee-vertical' : 'marquee'} var(--duration, 40s) linear infinite`,
               animationDirection: reverse ? 'reverse' : 'normal',
               "--gap": "1rem"
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

export default Marquee;

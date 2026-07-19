import type { ReactNode, SVGProps } from "react";

type IconName =
  | "arrow-right"
  | "close"
  | "external"
  | "github"
  | "linkedin"
  | "menu";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const paths: Record<IconName, ReactNode> = {
  "arrow-right": <path d="M5 12h14m-5-5 5 5-5 5" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  external: <path d="M14 5h5v5m0-5-9 9M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />,
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 .7a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.5A11.5 11.5 0 0 0 12 .7Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      stroke="none"
      d="M5.4 7.8H1.8V19h3.6V7.8ZM3.6 2.2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM19 12.6c0-3.4-1.8-5-4.3-5-2 0-2.9 1.1-3.4 1.9V7.8H7.7V19h3.6v-5.5c0-1.5.3-2.9 2.1-2.9 1.8 0 1.9 1.7 1.9 3V19H19v-6.4Z"
    />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

import { FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const ITEMS = [
  {
    label: "Email",
    href: "mailto:mxsonn@tyry.services",
    icon: "skill-icons:gmail-light",
  },
  {
    label: "Github",
    href: "https://github.com/MxsonnGithub",
    icon: "skill-icons:github-light",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/WolfyX__",
    icon: "skill-icons:twitter",
  },
];

export const StartMenu: FC = () => {
  return (
    <div className="absolute bottom-10 left-0 flex h-[250px] w-52 border-2 border-[#7c7c7c] border-l-white border-t-white bg-silver">
      <div className="w-[26px] bg-accent">
        <p className="translate-y-[210px] -rotate-90 text-lg font-bold text-white">
          <span className="ml-1.5">NotMxsonn</span>
        </p>
      </div>

      <div className="flex w-full flex-col justify-between text-sm">
        {ITEMS.map((item) => (
          <StartMenuItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

const StartMenuItem: FC<{ label: string; href: string; icon: string }> = ({
  label,
  href,
  icon,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-2 px-2.5 py-2 hover:bg-accent hover:text-white"
    >
      <Icon icon={icon} className="h-8 w-8" />
      {label}
    </Link>
  );
};

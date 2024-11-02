import Image from "next/image";
import { FC } from "react";

const PROJECTS = [
  {
    title: "CloudVault",
    image: "/screenshots/cloudvault.webp",
    imageAlt: "Screenshot",
    href: "https://csrperlc.vercel.app/",
    description: [
    "A good ERLC server based in Placerville California!",
    ],
  },
];

export const Projects: FC = () => {
  return (
    <div className="overflow-auto">
      <div className="mx-auto flex max-w-4xl flex-col px-6 py-8">
        <h2 className="text-3xl font-bold">Projects</h2>

        {PROJECTS.map((project, i) => (
          <div key={project.title}>
            <div className="my-8 border border-b-white border-t-[#808080]" />

            <div className="space-y-6">
              <h3 className="text-xl font-bold">
                {i + 1}. {project.title}
              </h3>

              <div>
                <a target="_blank" href={project.href}>
                  <Image
                    priority
                    width={project.title === "Costfocus" ? 400 : 950}
                    height={1280}
                    src={project.image}
                    className="mx-auto"
                    alt={project.imageAlt}
                  />
                </a>
              </div>

              <ul className="list-inside list-disc space-y-3 pl-1">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

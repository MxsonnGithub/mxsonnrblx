import { FC } from "react";
import { Icon } from "@iconify/react";

export const Biography: FC = () => {
  return (
    <div className="overflow-auto">
      <div className="mx-auto w-full max-w-3xl p-6">
        <div>
          <h2 className="text-3xl font-bold">NotMxsonn</h2>
          <p className="pt-3 text-base text-slate-600">Web Developer</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <Icon icon="devicon:html5" className="h-6 w-6" />
          <Icon icon="devicon:css3" className="h-6 w-6" />
          <Icon icon="devicon:javascript" className="h-6 w-6" />
          <Icon icon="logos:react" className="h-6 w-6" />
          <Icon icon="devicon:git" className="h-6 w-6" />
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">About Me</h3>
          <p className="pt-3">
          I am a 13-year-old self-taught JavaScript developer with a passion for coding and creating interactive web experiences. I’m currently learning HTML and CSS, which I find pretty easy to pick up. I love exploring new technologies and working on exciting projects, like developing games and websites. When I’m not coding, you can find me playing video games, hanging out with friends, or diving into new programming challenges. I’m always eager to learn and improve my skills!
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">Web Developer</h3>
          <p className="pt-3">
          As a self-taught web developer, I’ve honed my skills through various personal and collaborative projects. I have a strong foundation in frontend development, particularly with JavaScript, HTML, and CSS, and am expanding my expertise in backend development. My primary focus is on building user-friendly interfaces, with a current emphasis on React.js for dynamic web applications. I aim to create visually appealing and responsive designs, combining functionality with a seamless user experience.
          </p>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold">Résumé</h3>
          <p className="pt-3">
            <a
              target="_blank"
              href=""
              className="text-accent underline"
            >
              Check out my résumé here 👉 WIP.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

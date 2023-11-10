import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMui,
  SiBulma,
  SiRedux,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiGitlab,
  SiGithub,
  SiBitbucket,
  SiPostman,
  SiYarn,
  SiNpm,
  SiVercel,
  SiHeroku,
} from "react-icons/si";
import { FaReact, FaVuejs, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";

export const generateIcon = (icon) => {
  switch (icon) {
    case "javascript":
      return <SiJavascript />;
    case "typescript":
      return <SiTypescript />;
    case "react":
      return <FaReact />;
    case "next":
      return <SiNextdotjs />;
    case "vue":
      return <FaVuejs />;
    case "tailwind":
      return <SiTailwindcss />;
    case "mui":
      return <SiMui />;
    case "bulma":
      return <SiBulma />;
    case "bootstrap":
      return <FaBootstrap />;
    case "node":
      return <FaNodeJs />;
    case "express":
      return <SiExpress />;
    case "redux":
      return <SiRedux />;
    case "mongodb":
      return <SiMongodb />;
    case "firebase":
      return <SiFirebase />;
    case "supabase":
      return <SiSupabase />;
    case "prisma":
      return <SiPrisma />;
    case "mysql":
      return <SiMysql />;
    case "postgresql":
      return <SiPostgresql />;
    case "gitlab":
      return <SiGitlab />;
    case "github":
      return <SiGithub />;
    case "bitbucket":
      return <SiBitbucket />;
    case "postman":
      return <SiPostman />;
    case "yarn":
      return <SiYarn />;
    case "npm":
      return <SiNpm />;
    case "vercel":
      return <SiVercel />;
    case "heroku":
      return <SiHeroku />;
    case "netlify":
      return <BiLogoNetlify />;
    default:
      return null;
  }
};
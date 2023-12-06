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
import { AiOutlineWhatsApp } from "react-icons/ai";
import { LuCakeSlice, LuUser2, LuMail } from "react-icons/lu";

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
    case "whatsapp":
      return <AiOutlineWhatsApp size={26} />;
    case "cake":
      return <LuCakeSlice size={26} />;
    case "user":
      return <LuUser2 size={26} />;
    case "mail":
      return <LuMail size={26} />;
    default:
      return null;
  }
};

export const findWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

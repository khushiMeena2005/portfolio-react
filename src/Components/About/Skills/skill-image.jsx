import bootstrap from "../../../../public/svg/bootstrap.svg";
import c from "../../../../public/svg/c.svg";
import cplusplus from "../../../../public/svg/cplusplus.svg";
import css from "../../../../public/svg/css.svg";
import git from "../../../../public/svg/git.svg";
import html from "../../../../public/svg/html.svg";
import javascript from "../../../../public/svg/javascript.svg";
import matlab from "../../../../public/svg/matlab.svg";
import mongoDB from "../../../../public/svg/mongoDB.svg";
import python from "../../../../public/svg/python.svg";
import react from "../../../../public/svg/react.svg";
import vitejs from "../../../../public/svg/vitejs.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;

    case "react":
      return react;

    case "bootstrap":
      return bootstrap;

    case "mongodb":
      return mongoDB;

    case "vitejs":
      return vitejs;

    case "c":
      return c;
    case "c++":
      return cplusplus;

    case "matlab":
      return matlab;

    case "python":
      return python;

    case "git":
      return git;

    default:
      break;
  }
};

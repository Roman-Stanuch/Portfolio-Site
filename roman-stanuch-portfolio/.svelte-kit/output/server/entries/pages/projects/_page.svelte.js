import "clsx";
import { H as Header, B as Billboard } from "../../../chunks/billboard.js";
function _page($$payload) {
  Header($$payload);
  $$payload.out += `<!----> <div style="height: 2vh;"></div> `;
  Billboard($$payload, {
    title: "Projects",
    mainText: "This page will feature some of the projects I have made on my own time. Until it is fleshed out, please check out my GitHub by clicking the logo below!"
  });
  $$payload.out += `<!----> <div style="margin:2vh; display:flex; justify-content: center;"><a href="https://github.com/Roman-Stanuch" target="_blank"><img src="/images/GithubLogo.svg" alt="Logo" style="width: 25vw;"/></a></div>`;
}
export {
  _page as default
};

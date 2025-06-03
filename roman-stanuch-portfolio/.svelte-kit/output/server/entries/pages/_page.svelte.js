import "clsx";
import { H as Header, B as Billboard } from "../../chunks/billboard.js";
function _page($$payload) {
  Header($$payload);
  $$payload.out += `<!----> <div style="margin:2vh; display:flex; justify-content: center;"><img src="/images/PolygonalLogo.png" alt="Logo" style="width: 25vw;"/></div> `;
  Billboard($$payload, {
    title: "Greetings, I'm Roman!",
    mainText: "I'm currently a student studying computer science! I enjoy applying my programming skills towards creative endeavors and challenging problems. My current focus is on computer graphics and 3D applications, but I dabble in all realms of software development! Below you can find my most active social media presences to give you an idea of what I've been working on!"
  });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};

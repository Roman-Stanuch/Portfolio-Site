import "clsx";
import { H as Header, B as Billboard } from "../../../chunks/billboard.js";
function _page($$payload) {
  Header($$payload);
  $$payload.out += `<!----> <div style="height: 2vh;"></div> `;
  Billboard($$payload, { title: "Contact" });
  $$payload.out += `<!----> <div style="height: 2vh;"></div> <div style="display:flex; justify-content:center;"><iframe title="Contact Form" src="https://docs.google.com/forms/d/e/1FAIpQLSfvQ_ppec0y99IN81QbL0_jyey8bP32IayP8Rjp4Bg57ifUSw/viewform?embedded=true" style="width:80vw; height:80vh; border-color:transparent; margin:0;">Loading…</iframe></div>`;
}
export {
  _page as default
};

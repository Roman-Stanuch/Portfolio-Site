import { d as stringify } from "./index.js";
import { b as base } from "./paths.js";
import { e as escape_html } from "./escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Header($$payload) {
  $$payload.out += `<div id="mainBox" class="svelte-12hs4ad"><div id="secondaryBox" class="svelte-12hs4ad"><a class="headerItem svelte-12hs4ad"${attr("href", `${stringify(base)}/`)}>Home</a> <a class="headerItem svelte-12hs4ad"${attr("href", `${stringify(base)}/projects`)}>Projects</a> <a class="headerItem svelte-12hs4ad"${attr("href", `${stringify(base)}/contact`)}>Contact</a></div></div>`;
}
function Billboard($$payload, $$props) {
  let {
    title = "Page",
    mainText = "",
    imageSource = "Logo.png"
  } = $$props;
  $$payload.out += `<div id="Billboard" class="svelte-1s4j6nr"><div id="Border" class="svelte-1s4j6nr"><h1>${escape_html(title)}</h1> <p>${escape_html(mainText)}</p></div></div>`;
}
export {
  Billboard as B,
  Header as H
};

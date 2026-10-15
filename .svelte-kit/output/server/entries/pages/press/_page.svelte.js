import { h as head, a as ensure_array_like, b as attr, aa as stringify, e as escape_html } from "../../../chunks/index.js";
function _page($$renderer) {
  const images = [
    {
      src: "/img/press/kate-2025.jpg",
      year: "2025",
      photographer: "Kate Kotlyar"
    },
    {
      src: "/img/press/madison-2024.jpg",
      year: "2024",
      photographer: "Madison Clowes"
    },
    //{src:"/img/press/kate-2024.jpeg", year:"2024", photographer:"Kate Kotlyar"},
    {
      src: "/img/press/kate-2025_1.jpg",
      year: "2025",
      photographer: "Kate Kotlyar"
    },
    {
      src: "/img/press/sydney-2025.jpg",
      year: "2025",
      photographer: "Sydney Goldenberg"
    },
    {
      src: "/img/press/madison-2024_1.jpg",
      year: "2024",
      photographer: "Madison Clowes"
    },
    {
      src: "/img/press/kate-2025_2.jpg",
      year: "2025",
      photographer: "Kate Kotlyar"
    }
  ];
  head("1wnry0g", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>PRESS</title>`);
    });
  });
  $$renderer.push(`<main class="svelte-1wnry0g"><img width="400px" class="title svelte-1wnry0g" src="/img/press_cutout.webp" alt="press page"/> <section class="svelte-1wnry0g"><!--[-->`);
  const each_array = ensure_array_like(images);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let img = each_array[$$index];
    $$renderer.push(`<div class="svelte-1wnry0g"><img${attr("src", img.src)}${attr("alt", `${stringify(img.photographer)}, ${stringify(img.year)}`)} class="svelte-1wnry0g"/><p class="svelte-1wnry0g">${escape_html(img.photographer)} © ${escape_html(img.year)}</p></div>`);
  }
  $$renderer.push(`<!--]--></section></main>`);
}
export {
  _page as default
};

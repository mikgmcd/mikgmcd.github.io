import { h as head } from "../../../chunks/index.js";
function _page($$renderer) {
  head("hnidpj", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>TOUR</title>`);
    });
    $$renderer2.push(`<script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"><\/script>`);
    $$renderer2.push(`<!---->`);
  });
  $$renderer.push(`<main class="svelte-hnidpj"><img width="400px" src="/img/tour_cutout.webp" alt="tour page header" class="svelte-hnidpj"/> <div class="svelte-hnidpj"><a class="bit-widget-initializer" data-artist-name="Smilley" data-display-local-dates="false" data-display-past-dates="false" data-auto-style="false" data-text-color="#000000" data-link-color="#00b4b3" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-display-start-time="true" data-link-text-color="#FFFFFF" data-display-lineup="false" data-display-play-my-city="true" data-separator-color="rgba(255, 255, 255, 0.5)"></a></div></main>`);
}
export {
  _page as default
};

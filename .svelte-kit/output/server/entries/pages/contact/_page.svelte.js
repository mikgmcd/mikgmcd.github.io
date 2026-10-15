import { h as head } from "../../../chunks/index.js";
function _page($$renderer) {
  head("1bv7ezn", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>CONTACT</title>`);
    });
    $$renderer2.push(`<script type="text/javascript" src="https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"><\/script>`);
    $$renderer2.push(` `);
    $$renderer2.push(`<script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);<\/script>`);
  });
  $$renderer.push(`<main class="svelte-1bv7ezn"><img width="400px" src="/img/contact_cutout.webp" alt="contact page"/> <iframe style="border:none" src="https://us12.list-manage.com/contact-form?u=e959f36a6d2622702b6f4390e&amp;form_id=6af341d999bc9f51c552706b18434397" height="950px" width="100%" title="" scrolling="no"></iframe></main>`);
}
export {
  _page as default
};

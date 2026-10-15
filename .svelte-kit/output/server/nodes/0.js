import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.D5gYYqZo.js","app/immutable/chunks/CXT3ReVq.js","app/immutable/chunks/D-XuCXpJ.js","app/immutable/chunks/B40u__nm.js","app/immutable/chunks/DX6eQhwe.js","app/immutable/chunks/3bZEC8rV.js","app/immutable/chunks/CFfP6pNq.js","app/immutable/chunks/DSvaBwDe.js","app/immutable/chunks/DpPYpBh6.js","app/immutable/chunks/BcfFYOWc.js","app/immutable/chunks/D_LMOBu5.js","app/immutable/chunks/Ccc5MZM6.js","app/immutable/chunks/BrQztkLt.js"];
export const stylesheets = ["app/immutable/assets/0.B_aiYWA9.css"];
export const fonts = [];

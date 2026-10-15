export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set([".nojekyll","img/Horse.webm","img/album_announcement.webp","img/album_announcement_emdash.webp","img/bio_cutout.webp","img/contact_cutout.webp","img/do_not_click.webp","img/guitarbricks.webp","img/logo_cutout.webp","img/milesbricks.webp","img/milesbricks2.webp","img/music_cutout.webp","img/oh-well_artwork.webp","img/old/artwork.jpg","img/old/bio_cutout.png","img/old/contact_cutout.jpeg","img/old/guitarbricks.png","img/old/logo_cutout.png","img/old/music_cutout.jpeg","img/old/press_cutout.png","img/old/show1.jpg","img/old/show2.png","img/old/smilley_logo_white.png","img/old/tour_cutout.png","img/press/kate-2024.jpeg","img/press/kate-2025.jpg","img/press/kate-2025_1.jpg","img/press/kate-2025_2.jpg","img/press/madison-2024.jpg","img/press/madison-2024_1.jpg","img/press/sydney-2025.jpg","img/press_cutout.webp","img/rail_artwork.webp","img/shin-ei_artwork.webp","img/show1.webp","img/show2.webp","img/smilley.gif","img/smilley_logo_white.webp","img/tour_cutout.webp","robots.txt"]),
	mimeTypes: {".webm":"video/webm",".webp":"image/webp",".jpg":"image/jpeg",".png":"image/png",".jpeg":"image/jpeg",".gif":"image/gif",".txt":"text/plain"},
	_: {
		client: {start:"app/immutable/entry/start.1RLJDRFZ.js",app:"app/immutable/entry/app.G-TzZnAz.js",imports:["app/immutable/entry/start.1RLJDRFZ.js","app/immutable/chunks/D-XuCXpJ.js","app/immutable/chunks/Ccc5MZM6.js","app/immutable/chunks/BrQztkLt.js","app/immutable/entry/app.G-TzZnAz.js","app/immutable/chunks/D-XuCXpJ.js","app/immutable/chunks/B40u__nm.js","app/immutable/chunks/CXT3ReVq.js","app/immutable/chunks/BrQztkLt.js","app/immutable/chunks/DX6eQhwe.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/music",
				pattern: /^\/music\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/press",
				pattern: /^\/press\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tour",
				pattern: /^\/tour\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

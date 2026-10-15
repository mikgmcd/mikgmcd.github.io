
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact" | "/music" | "/press" | "/tour";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/music": Record<string, never>;
			"/press": Record<string, never>;
			"/tour": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/contact" | "/music" | "/press" | "/tour";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/img/Horse.webm" | "/img/album_announcement.webp" | "/img/album_announcement_emdash.webp" | "/img/bio_cutout.webp" | "/img/contact_cutout.webp" | "/img/do_not_click.webp" | "/img/guitarbricks.webp" | "/img/logo_cutout.webp" | "/img/milesbricks.webp" | "/img/milesbricks2.webp" | "/img/music_cutout.webp" | "/img/oh-well_artwork.webp" | "/img/old/artwork.jpg" | "/img/old/bio_cutout.png" | "/img/old/contact_cutout.jpeg" | "/img/old/guitarbricks.png" | "/img/old/logo_cutout.png" | "/img/old/music_cutout.jpeg" | "/img/old/press_cutout.png" | "/img/old/show1.jpg" | "/img/old/show2.png" | "/img/old/smilley_logo_white.png" | "/img/old/tour_cutout.png" | "/img/press/kate-2024.jpeg" | "/img/press/kate-2025.jpg" | "/img/press/kate-2025_1.jpg" | "/img/press/kate-2025_2.jpg" | "/img/press/madison-2024.jpg" | "/img/press/madison-2024_1.jpg" | "/img/press/sydney-2025.jpg" | "/img/press_cutout.webp" | "/img/rail_artwork.webp" | "/img/shin-ei_artwork.webp" | "/img/show1.webp" | "/img/show2.webp" | "/img/smilley.gif" | "/img/smilley_logo_white.webp" | "/img/tour_cutout.webp" | "/robots.txt" | string & {};
	}
}
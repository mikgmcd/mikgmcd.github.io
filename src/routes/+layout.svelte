<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';
	import { page } from '$app/state';
	
	let { children } = $props();

	const navLinks = [
		{path: '/', label: 'HOME'},
		{path: '/about', label: 'ABOUT'},
		{path: '/music', label: 'MUSIC'},
		{path: '/tour', label: 'TOUR'},
		{path: '/press', label: 'PRESS'},
		{path: '/contact', label: 'CONTACT'},
		{path: 'https://smilley.bigcartel.com/', label: 'MERCH'},
	]

	let innerWidth = $state(0);
	let innerHeight = $state(0);
	let scrollY = $state(0);

	let menuExpanded = $state(false);

	const expandCompress = () => {
		menuExpanded = !menuExpanded;
	}

	const scrollToTop = () => {
		window.scrollTo({
			top:0,
			behavior:'smooth'
		});
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight bind:scrollY/>

{#if innerWidth >= innerHeight}
<nav>
	<hr>
	{#each navLinks as link}
	<p><a href="{link.path}" class:active={page.url.pathname === link.path}>{link.label}</a></p>
	<hr>
	{/each}
</nav>
{:else}
<!--TODO: add a "scroll to top" feature-->
<nav style="flex-direction:column; background:black; height:{menuExpanded ? innerHeight : 80}px;">
	<button style="border:none; background:transparent; height:{menuExpanded ? innerHeight : 80}px;" onclick={expandCompress}>
		{#if menuExpanded}
		<svg
		style="display:block; margin-right:0; margin-left:auto; margin-bottom:15px;"
		width="30"
		height="30"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		>
		<path
			d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
			fill="white"
		/>
		</svg>
		{/if}
		{#each navLinks as link}
		<p style="display:{menuExpanded ? "auto" : "none"};"><a href="{link.path}" class:active={page.url.pathname === link.path}>{link.label}</a></p>
		<hr style="margin-bottom:{menuExpanded ? 0 : 7}px; width:{menuExpanded ? 100 : 15}%; margin-right:0px; margin-left:auto;">
		{/each}
	</button>
</nav>
	<button style="z-index:9; transform:translate(0px,{scrollY > 400 ? 0 : 70}px)" title="scroll to top" class="scrollToTop" onclick={scrollToTop}>
		<svg
		width="36"
		height="36"
		viewBox="0 0 24 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		>
		<path
			d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
			fill="currentColor"
		/>
		</svg>
	</button>
{/if}
<img style="z-index:999; display:block; position:fixed; bottom:0;" width=100px src="/img/smilley.gif" alt="teehee"/>

{@render children()}

<div>
	<p style="text-align:center; bottom:0; top:auto;">© 2025 by Feels Like Monday. All rights reserved.</p>
	<img src="/img/smilley_logo_white.webp" alt="">
</div>

<style>
	nav{
		display:flex;
		flex-direction:row;
		justify-content:space-evenly;

		padding-top:10px;
		padding-bottom:15px;

		transition: height 1s;
	}
	nav hr{
		margin:0;
		color:white;

		transition: margin-bottom 1s;
		transition: width 1s;
	}
	nav a{
		color:white;
		font-size:large;
		font-weight:bold;
		text-decoration:none;

		transition: color 0.5s;
	}
	nav a:hover, .active{
		color:red;

		transition: color 0.5s;
	}
	:global(body){
		background-color:black;
	}
	:global(p,h1,h2,h3,h4,h5,h6,ul,ol){
		color:white;
		font-family: Arial, Helvetic, sans-serif;
	}
	img{
		display:block;
		margin-left:auto;
		margin-right:auto;
	}
	button:hover{
		cursor:pointer;
	}
	.scrollToTop{
		position:fixed; 
		bottom:20px;
		right:20px;

		font-size:xx-large;
		width:50px;
		height:50px;

		background:white;
		border-radius:100%;
		border:none;

		transition:transform 400ms;
	}
</style>


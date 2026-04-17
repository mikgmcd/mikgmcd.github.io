<script lang=ts>
    let innerHeight = $state(0);
    let innerWidth = $state(0);
</script>
<svelte:window bind:innerHeight bind:innerWidth/>

<svelte:head>
    <title>MUSIC</title>
</svelte:head>

<main>
<img width=400px style="max-width:{innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}px" src="/img/music_cutout.webp" alt="music page">

<iframe title="Rail" style="border: 0; width: {innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}px; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=1275311219/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://smilley.bandcamp.com/track/rail">Rail by Smilley</a></iframe>
<iframe title="Shin Ei/8899" style="border: 0; width: {innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}px; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2503805977/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://smilley.bandcamp.com/album/shin-ei">Shin Ei by Smilley</a></iframe>

<iframe title="stay well" style="border: 0; width: {innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}px; height:{(innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10) + 120}px;" src="https://bandcamp.com/EmbeddedPlayer/album=1604939499/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://smilley.bandcamp.com/album/stay-well">Stay Well! by Smilley</a></iframe>

<iframe title="spiral (acoustic)" style="border: 0; width: {innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}px; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3353659869/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://smilley.bandcamp.com/track/spiral-acoustic">Spiral (Acoustic) by Smilley</a></iframe>
<iframe title="post adolescence glow" style="border: 0; width: {innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}px; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2059185155/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://smilley.bandcamp.com/album/post-adolescence-glow-101124">Post Adolescence Glow 10.11.24 by Smilley</a></iframe>

<hr style="width:70%;">

<iframe width="{innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}" height="{(innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10) * 0.5625}" src="https://www.youtube.com/embed/OfVroh2Ixco?si=4nPc5rXCKUAc_1I3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="{innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}" height="{(innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10) * 0.5625}" src="https://www.youtube.com/embed/c4F7_3Glodk?si=4nPc5rXCKUAc_1I3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="{innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}" height="{(innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10) * 0.5625}" src="https://www.youtube.com/embed/RelpYoEKe1Q?si=4nPc5rXCKUAc_1I3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="{innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}" height="{(innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10) * 0.5625}" src="https://www.youtube.com/embed/Q1fJ-DaUYis?si=4nPc5rXCKUAc_1I3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="{innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10}" height="{(innerWidth > innerHeight ? innerWidth/3 : innerWidth - 10) * 0.5625}" src="https://www.youtube.com/embed/iwZ8Z87N0Ow?si=4nPc5rXCKUAc_1I3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</main>

<style>
    main{
        display:flex;
        flex-direction:column;
        align-items:center;
        align-self:center;
        right:auto;
        left:auto;
        width:100%;
    }
    iframe{
        margin-bottom:10px;
    }
</style>
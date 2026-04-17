<script lang=ts>
    let innerWidth = $state(0);
	let innerHeight = $state(0);

    const minMargin = 50;
    const maxMargin = 350;

    function getMargin(){
        if (innerWidth - innerHeight >= 400){
            return maxMargin;
        } else if (innerWidth <= innerHeight && innerWidth > 600){
            return minMargin;
        }
        return 0;
    }
</script>

<svelte:head>
    <title>ABOUT</title>
</svelte:head>

<svelte:window bind:innerWidth bind:innerHeight/>

<div>
    {#if innerWidth >= innerHeight}
    <img style="max-width:600px;" src="/img/bio_cutout.webp" alt="biography"/>
    <img style="max-height:280px; margin-top:100px;" src="/img/show2.webp" alt=""/>
    {:else}
    <img style="max-width:{innerWidth}px;" src="/img/bio_cutout.webp" alt="biography"/>
    {/if}
</div>

<h1 style="margin-left:{getMargin()}px; margin-right:{getMargin()}px;">Who <i>is</i> Smilley?</h1>
<p  style="margin-left:{getMargin()}px; margin-right:{getMargin()}px;">
    Smilley is the brainchild project of singer/songwriter Miles Platt from Los Angeles, with a body of work consisting of emotional, raw, and nostalgic alternative/indie rock. He strives to provide people with a space to be themselves through his self-expression. Primarily recognized for personal lyrics mixed with a nostalgic and cathartic sound, Smilley is the perfect storm concocted of catchiness and unwavering emotional honesty.
    <br><br>
    Platt also prides himself in Smilley being a celebration of all things DIY. His debut album, 'Stay Well!', was written, recorded, mixed, and mastered in various bedrooms and houses. He strives to make Smilley an open invitation for all to feel comfortable and seen. Whether through music or at shows, Miles values inclusivity and acceptance above all else and feels as though he “did his job successfully” if even one person steps away from his music feeling like they were understood or represented on any level. The group have had significant online growth since January of 2025 on TikTok via consistent and targeted livestreams twice a week, rapidly building a close-knit and dedicated digital following (including the creation of a fan-founded Discord server). A second album is currently in the works which explores a heavier emo/post-hardcore sound while maintaining a firm grasp on their indie roots. At the end of the day, Smilley is a way for Platt to process his own emotions. While the music comes from his experiences, the earwormy hooks mixed with thought-provoking instrumentals and powerful lyrics of Smilley will make for a performance experience unlike any other.
</p>

<div style="display:flex; align-content:center;">
    <a href="/img/Horse.webm"><img width=30px src="/img/do_not_click.webp" alt=""></a>
</div>

<style>
    div{
        display:flex;
        flex-direction:row;
        justify-content: center;
        height: fit-content;
    }
    p, h1{
        font-family:'Courier New', Courier, monospace;
        line-height:200%;
    }
    p{
        padding-bottom:50px;
    }
</style>
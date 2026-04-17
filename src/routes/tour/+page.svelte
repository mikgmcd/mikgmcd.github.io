<svelte:head>
    <script charset="utf-8" src="https://widget.bandsintown.com/main.min.js"></script>
    <title>TOUR</title>
</svelte:head>  
<main>
    <img width=400px src="/img/tour_cutout.webp" alt="tour page header"/>
    <!-- bandsintown widget code -->    
    <div>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <!-- svelte-ignore a11y_missing_attribute --> 
        <a class="bit-widget-initializer" data-artist-name="Smilley" data-display-local-dates="false" data-display-past-dates="false" data-auto-style="false" data-text-color="#000000" data-link-color="#00b4b3" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-display-start-time="true" data-link-text-color="#FFFFFF" data-display-lineup="false" data-display-play-my-city="true" data-separator-color="rgba(255, 255, 255, 0.5)"></a>
    </div>
</main>

<style>
    main{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    img{
        max-width:600px;
    }
    div{
        width:50%;
        background:white;
    }
    @media (width <= 600px){
        div{
            width:100%;
        }
        img{
            max-width:100%;
        }
    }
</style>
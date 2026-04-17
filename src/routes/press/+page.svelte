<script>
    const images = [
        {src:"/img/press/kate-2025.jpg", year:"2025", photographer:"Kate Kotlyar"},
        {src:"/img/press/madison-2024.jpg", year:"2024", photographer:"Madison Clowes"},
        //{src:"/img/press/kate-2024.jpeg", year:"2024", photographer:"Kate Kotlyar"},
        {src:"/img/press/kate-2025_1.jpg", year:"2025", photographer:"Kate Kotlyar"},
        {src:"/img/press/sydney-2025.jpg", year:"2025", photographer:"Sydney Goldenberg"},
        {src:"/img/press/madison-2024_1.jpg", year:"2024", photographer:"Madison Clowes"},
        {src:"/img/press/kate-2025_2.jpg", year:"2025", photographer:"Kate Kotlyar"},
    ]
</script>

<svelte:head>
    <title>PRESS</title>
</svelte:head>

<main>
    <img width=400px class="title" src="/img/press_cutout.webp" alt="press page"/>
    <section>
        {#each images as img}
        <div><img src="{img.src}" alt="{img.photographer}, {img.year}"/><p>{img.photographer} © {img.year}</p></div>
        {/each}
    </section>
</main>

<style>
    main{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .title{
        min-width:400px;
    }
    section {
        width:60%;
        display: flex;
        flex-wrap: wrap;
    }
    div {
        margin: 5px 10px;
        flex-grow: 1;
        height: auto;
        width:fit-content;
        object-fit: scale-down;
    }
    div img{
        width:100%;
        height:90%;
    }
    p{
        margin-left:10px;
        margin-bottom:20px;
        font-size:small;
        font-family:'Times New Roman', Times, serif;
    }
    @media (width < 600px){
        .title{
            min-width:90%;
            width:100%;
        }
        section{
            flex-direction:column;
            width:90%;
            justify-content:center;
            overflow:hidden;
        }
        div{
            width:100%;
            text-align:left;
        }
    }
</style>

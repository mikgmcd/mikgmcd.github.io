<script lang=ts>
    let innerHeight = $state(0);
    let innerWidth = $state(0);
</script>
<svelte:window bind:innerHeight bind:innerWidth/>

<svelte:head>
  <title>SMILLEY</title>
</svelte:head>

<div class="top">
    <img src="/img/logo_cutout.webp" alt="smilley written in all caps on a torn piece of paper"/>
    {#if innerHeight < innerWidth}
    <p>new single <i>Rail</i> out now</p>
    {:else}
    <p>new single <a href="https://fanlink.tv/rail_smilley"><i>Rail</i></a> out now</p>
    {/if}
</div>
<div class="images">
    <div class="music_artwork">
        <a href="https://fanlink.tv/rail_smilley"><img width=500px src="/img/rail_artwork.webp" alt="the artwork for Rail"/></a>
        <p><strong>"it's genuinely good"</strong>
            <br><br>
            - 25footcouch, <i>albumoftheyear.org</i>
        </p>
    </div>
    <div class="show1">
      <img height=392px src="/img/show1.webp" alt=""/>
      <p style="margin-left:10px; font-size:small; font-family:'Times New Roman', Times, serif;">Kate Kotlyar © 2024</p>
    </div>
</div>
<!-- Begin Mailchimp Signup Form -->
      <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
      <div id="mc_embed_signup">
        <form action="https://linktr.us12.list-manage.com/subscribe/post?u=e959f36a6d2622702b6f4390e&amp;id=58655fa792&amp;f_id=009ab9e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
          <h2 class="mailing-title">Subscribe to my mailing list!</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
      <div class="mc-field-group">
        <label for="mce-EMAIL" class="sans">Give me your email<span class="asterisk">*</span>
      </label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
      </div>
      <div class="mc-field-group">
        <label for="mce-FNAME" class="sans">First Name </label>
        <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
      </div>
      <div class="mc-field-group">
        <label for="mce-LNAME" class="sans">Last Name </label>
        <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
      </div>
      <div class="mc-field-group size1of2">
        <label for="mce-BIRTHDAY-month" class="sans">Birthday </label>
        <div class="datefield">
          <span class="subfield monthfield">
            <input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month">
          </span>  
          <span class="subfield dayfield">
            <input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day">
          </span> 
        </div>
      </div>
      <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div><!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e959f36a6d2622702b6f4390e_58655fa792" tabindex="-1" value=""></div>
          <div class="optionalParent">
            <div class="clear foot">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
            </div>
          </div>
        </div>
      </form>
      </div>
      <!--End mc_embed_signup-->

<style>
    .top{
        min-width:85%;
        display:inline-block;
        background-image:url("/img/guitarbricks.webp");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 1px;
        margin-bottom:10px;
    }
    .top img{
        max-width:100%;
        display:block;
        margin-left:auto;
        margin-right:10%;
    }
    .top p{
        font-family:'Courier New', Courier, monospace;
        background-color:white;
        color:black;
        width:fit-content;
        font-weight:bolder;
        font-size:xx-large;

        display:block;
        margin-top:230px;
        margin-right:20%;
        margin-left:auto;
    }
    .images{
        display:flex;
        flex-direction:row;
        justify-content:center;
    }
    @media screen and (max-device-width:600px){
        .images{
            flex-direction:column;
        }
    }
    .music_artwork{
        margin-top:50px;
    }
    .music_artwork img{
        max-width:100%;
    }
    .music_artwork p{
        font-family:monospace;
        margin-left:50px;
    }
    .music_artwork p strong{
        font-size:xx-large;
    }
    .show1{
      width:fit-content; 
      margin-left:100px;
    }
    #mc_embed_signup{
        display:block;
        margin:auto;
        width:45%;
        color:white;
    }
    @media (width < 600px){
        .top{
            background-size: 1500px 100%;
        }
        .show1{
          margin-left:0;
        }
        #mc_embed_signup{
            width:100%;
        }
    }
</style>
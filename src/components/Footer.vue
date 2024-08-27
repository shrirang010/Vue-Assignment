<template>
    <div class="m-5 p-2">
        <div class="h3 text-center mb-3">Lets work together</div>
        <div class="footer d-flex justify-content-around">
            <div class="footersect-1 d-flex flex-column justify-content-around ">
                <p class="w-50 text-center">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
                    This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div>
                    <img class="m-2" src="/images/footer/discord.png">
                    <img class="m-2" src="/images/footer/facebook.png">
                    <img class="m-2" src="/images/footer/dribble.png">
                    <img class="m-2" src="/images/footer/instagram.png">
                    <img class="m-2" src="/images/footer/behance.png">
                </div>
            </div>
            <div class="d-flex flex-column justify-content-around ">
                <input class="bg-light border-0 placeholder-black" type="text" placeholder="Name">
                <input class="bg-light border-0 placeholder-black" type="text" placeholder="Email">
                <button class="bg-dark p-2 text-light">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
export default
    {
        name: "FooterComponent"
    }
</script>
<style scoped>
img {
    width: 30px;
    height: 30px;
}
@media (max-width:1000px)
{
    h3{
        text-align: center;
    }
    .footer
    {
        flex-direction: column;
    }
    .footersect-1{
        align-items: center;
    }

}
</style>

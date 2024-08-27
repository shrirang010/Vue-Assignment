<template>
<div class="gallery-card">
    <img :src="path">
    <div class="h3 m-2">Project title</div>
    <div class="m-2">UI, Art direction</div>
</div>
</template>
<script>
export default
    {
        name: "GalleryCardComponent",
        props: {
            path:{
                type:String
            }
        }
    }
</script>
<style scoped>
img{
    width:350px
}
@media (max-width:1000px)
{
    .gallery-card
    {
        text-align: center;
    }

  img{
    width: 85%;
  }
}
</style>
<template>
<div class="gallerybar">    
<div class="h1 text-center m-5">Latest Work</div>
<div class="gallery d-flex flex-wrap justify-content-around align-items-center">
<GalleryCardComponent class= "m-1" path ="/images/gallery/gallery_1.png"/>
<GalleryCardComponent class= "m-1" path ="/images/gallery/gallery_2.png"/>
<GalleryCardComponent class= "m-1" path ="/images/gallery/gallery_3.png"/>
<GalleryCardComponent class= "m-1" path ="/images/gallery/gallery_4.png"/>
<GalleryCardComponent class= "m-1" path ="/images/gallery/gallery_5.png"/>
<GalleryCardComponent class= "m-1" path ="/images/gallery/gallery_6.png"/>
</div>
</div>
</template>

<script>
import GalleryCardComponent from "./GalleryCard.vue"
export default
{
    name:"GalleryComponent",
    components:{
        GalleryCardComponent
    }

}
</script>
<style scoped>
@media (max-width: 1000px) 
{ 
.gallerybar
{
    align-content: center;
}
.gallery
{
    flex-direction: column;
}
}
</style>
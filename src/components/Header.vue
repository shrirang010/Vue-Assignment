<template>
<div class="header d-flex justify-content-between mt-5">
    <div class="subheader d-flex flex-column justify-content-center p-5">
        <div class="h5 fw-bold">Branding | Image making</div>
        <div class="display-2 m-1 fw-bolder">Visual Designer</div>
        <p class="m-2">This is a template Figma file turned into code using Anima.<br>Learn more at AnimaApp.com</p>
        <button class="bg-dark text-white w-50 p-3 mt-4">Contact</button>
    </div>
    <img src="/images/header.png">
</div>
</template>

<script>
export default
{
    name:"HeaderComponent"
}
</script>

<style scoped>
@media (max-width: 1000px) 
{ 
.header
{
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.subheader{
    align-items: center;
}
img{
    width: 90%;
}
}
</style>
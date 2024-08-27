<template>
    <div class="logobar d-flex justify-content-around mt-2 flex-wrap">
        <img v-for="(logo, index) in logos" :key="index" :src="logo" :alt="'Logo ' + index" class="logo"/>
    </div>
</template>
<script>
export default
    {
        name: "LogobarComponent",
        props: {
            logos: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style>

.logo {
  width: 100px;
  height: 50px;
  object-fit: contain;
}
@media (max-width: 1000px) 
{ 
    .logo{
        width:30px;
        height:30px;
    }
    .logobar{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
}
</style>
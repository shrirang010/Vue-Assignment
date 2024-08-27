<template>
<nav class="d-flex justify-content-between bg-white p-3 align-items-center">
    <div class="nav-item p-2 fw-bold">Logo</div>
    <div class="p-2 d-flex">
        <div class="nav-item p-2 font-weight-bold">About</div>
        <div class="nav-item p-2">Work</div>
        <div class="nav-item p-2">Contact</div>
    </div>
</nav>
</template>
<script>
export default {
    name:"AppNavbar",
    data()
    {
        return {
            name:"navbar"
        }
    }    
}
</script>
<style scoped>  
@media (max-width: 1000px) 
{ 
    nav{
        width:90%;
        font-size: small;
        flex-direction: column;
        align-items: center;
    }   
    
}
</style>
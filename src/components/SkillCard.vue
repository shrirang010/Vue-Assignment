<template>
    <div class="d-flex flex-column justify-content-around align-items-center">
        <img class="m-3" :src="path">
        <div class="h3 fw-bold m-3">{{ title }}</div>
        <div class="text-center">{{ description }}</div>
    </div>
</template>
<script>
export default
    {
        name: "SkillCard",
        props: {
            title: {
                type: String
            },
            description: {
                type: String
            },
            path: { type: String }
        }
    }
</script>
<style scoped>
img {
    width: 200px;
    height: 200px;
}
@media (max-width:1000px)
{
img{
    width: 50%;
    height: auto
}
}
</style>
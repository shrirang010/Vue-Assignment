<template>
    <div class="skill d-flex justify-content-around mt-5 mb-5">
        <SkillCard title="Product Design" :description="description" path="/images/skills/product.png" />
        <SkillCard title="Visual Design" :description="description" path="/images/skills/visual.png" />
        <SkillCard title="Art Direction" :description="description" path="/images/skills/art.png" />
    </div>
</template>
<script>
import SkillCard from "./SkillCard.vue"
export default
    {
        name: "SkillbarComponent",
        data() {
            return {
                description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
            }
        },
        components: {
            SkillCard
        }
    }
</script>
<style scoped>
@media (max-width:1000px)
{

    .skill
    {
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>
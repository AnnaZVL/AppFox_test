<template>
    <NuxtLink class="favorit" to="/breeds"
        >Избранные песели
        <IconLike />
        
    </NuxtLink>
</template>

<style lang="scss">
.favorit {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
    color: $color_text;
    font-size: 20px;
    transition: color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: $color-primary;
    }
}
</style>

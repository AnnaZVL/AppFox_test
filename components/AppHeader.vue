<template>
    <header class="header">
        <div class="container">
            <NuxtLink class="logo" to="/" >ПЕСЕЛЬ</NuxtLink>
            <FavoritDog/>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    padding: 10px 0;
    width: 100%;

    .container {
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    .logo {        
        color: $color-primary;
        font-weight: 500;
        font-size: 32px;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: $color_text;
        }
    }
}
</style>
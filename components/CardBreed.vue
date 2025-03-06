<script setup lang="ts">
import type { Breed } from '~/store';

const props = defineProps<{ breed: Breed }>();
</script>

<template>
    <div class="card">
        <img class="card__img" :src="breed.src" :alt="breed.breed" />

        <IconLike class="card__icon" :width="20" :height="20" :color="'white'"></IconLike>
        <NuxtLink class="card__name" aria-label="На страницу породы">{{ breed.breed }}</NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    height: 290px;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: 15px;
        background: linear-gradient(1.26deg, #000000 -5.53%, rgba(0, 0, 0, 0) 54.45%);
    }
    &__img {
        position: absolute;
        inset: 0;
        z-index: -5;
        aspect-ratio: 1 / 1;
        border-radius: 15px;
    }

    &__icon {
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    &__name {
        display: inline-block;
        align-self: flex-end;
        font-size: 24px;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }

        &::first-letter {
            text-transform: uppercase;
        }
    }
}
</style>

<script setup lang="ts">
import { useStateStore } from '~/store';
import type { Breed } from '~/store';

const stateStore = useStateStore();

const currentPage = ref(1);
const breedsPerPage = 4;

const displaydBreeds = computed<Breed[]>(() => {
    const start = (currentPage.value - 1) * breedsPerPage;
    const end = start + breedsPerPage;

    return stateStore.breeds.slice(start, end);
});
</script>

<template>
    <main class="main">
        <div class="container">
            <h1 class="page__title">Все породы</h1>
            <p class="text" v-if="stateStore.isLoading">Loading</p>
            <p class="text text--error" v-else-if="stateStore.isError">OOPS</p>

            <ul class="list" v-else>
                <li class="item" v-for="breed in displaydBreeds" :key="breed.id">
                    <card-breed :breed="breed"></card-breed>
                </li>
            </ul>
        </div>
    </main>
</template>

<style setup lang="scss">
.list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.page__title {
    margin-bottom: 40px;
}

.text {
    font-weight: 500;
    &--error {
        color: $color-error;
    }
}
</style>

<script setup lang="ts">
import { useStateStore } from '~/store';

const stateStore = useStateStore();

</script>

<template>
    <div>
        <h1>Home Page</h1>
        <p v-if="stateStore.isLoading">Loading</p>
        <p v-else-if="stateStore.isError">OOPS</p>
        <ul class="list" v-else>
            <li class="item">
                <img class="img" :src="stateStore.img"/>
            </li>
        </ul>
    </div>
</template>

<style setup lang="scss">
.list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;

    .item {
        
        .img {
            // width: 100%;
            // height: 100%;
        }
    }
}
</style>
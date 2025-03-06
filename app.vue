<script setup lang="ts">
import { useStateStore } from '~/store';

const stateStore = useStateStore();

onMounted(async () => { 
  await stateStore.getData();
  stateStore.getFromLocalStoradge();
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


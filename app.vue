<script setup lang="ts">
import { useStateStore } from '~/store';

const stateStore = useStateStore();

onMounted(async () => { 
  await stateStore.getData();
  
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


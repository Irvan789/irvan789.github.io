<script setup lang="ts">
import "overlayscrollbars/styles/overlayscrollbars.css"
</script>

<template>
  <NuxtLayout
    class="font-['Reddit_Sans'] text-zinc-800 selection:bg-zinc-800 selection:text-neutral-50"
  >
    <NuxtPage />
  </NuxtLayout>

  <Toaster
    offset="9px"
    mobile-offset="9px"
    position="top-center"
    :duration="3000"
    :visibleToasts="1"
    rich-colors
  />
</template>

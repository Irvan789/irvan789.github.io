<script setup lang="ts">
import {
  OverlayScrollbarsComponent,
  type OverlayScrollbarsComponentRef
} from "overlayscrollbars-vue"

useSeoMeta({
  ogImage: [
    {
      url: "/favicon.png"
    }
  ]
})

const scrollbarsElement = ref<OverlayScrollbarsComponentRef | null>(null)

onMounted(() => {
  window.osInstance = scrollbarsElement.value?.osInstance()
})

onUnmounted(() => {
  window.osInstance?.destroy()
})
</script>

<template>
  <OverlayScrollbarsComponent
    class="h-full max-h-full"
    ref="scrollbarsElement"
    :options="{
      scrollbars: {
        autoHide: 'scroll',
        autoHideDelay: 500
      }
    }"
  >
    <HomeNavigation />

    <div
      class="mb-4 grid min-h-[calc(100%-3.5rem)] w-full grid-rows-[auto_max-content] bg-white px-4 md:mb-6"
    >
      <div class="mx-auto mt-14 w-full max-w-6xl">
        <div class="grid grid-flow-row">
          <slot />
        </div>
      </div>

      <HomeFooter />
    </div>
  </OverlayScrollbarsComponent>
</template>

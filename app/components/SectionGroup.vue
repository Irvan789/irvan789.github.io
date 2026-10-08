<script setup lang="ts">
type ComponentProps = {
  class?: string
}

const props = defineProps<ComponentProps>()
</script>

<template>
  <section :class="className(props.class, 'scroll-mt-8 md:scroll-mt-6')">
    <slot />
  </section>
</template>

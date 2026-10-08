<script setup lang="ts">
type ComponentProps = {
  title: string
  description: string
}

const props = defineProps<ComponentProps>()
</script>

<template>
  <div class="mt-6 md:mt-8">
    <h2 class="mb-3 text-center text-xl/6 font-bold md:mb-4 md:text-2xl/7">
      {{ props.title }}
    </h2>

    <div class="mx-auto w-full max-w-3xl text-neutral-700">
      <p class="text-center text-sm/5.5 md:text-base/6">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

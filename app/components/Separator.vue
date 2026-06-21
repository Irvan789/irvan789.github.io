<script setup lang="ts">
import { twMerge } from "tailwind-merge"

type ComponentProps = {
  class?: string
}

const props = defineProps<ComponentProps>()
</script>

<template>
  <hr :class="twMerge('my-0.5 border-t border-t-neutral-200', props.class)" />
</template>

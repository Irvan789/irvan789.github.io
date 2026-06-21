<script setup lang="ts">
import { twMerge, type ClassNameValue } from "tailwind-merge"
import type { ButtonHTMLAttributes } from "vue"

const props = defineProps</* @vue-ignore */ ButtonHTMLAttributes>()
// const emits = defineEmits<ComponentEmits>()
</script>

<template>
  <button
    v-bind="props"
    :type="props.type ?? 'button'"
    :class="
      twMerge(
        'cursor-pointer rounded bg-zinc-700 text-sm/5 text-neutral-50 transition-colors duration-200 hover:bg-zinc-800 disabled:cursor-not-allowed disabled:bg-zinc-600',
        props.class as ClassNameValue
      )
    "
  >
    <slot />
  </button>
</template>

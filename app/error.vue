<script setup lang="ts">
import type { NuxtError } from "#app"

const app = useAppConfig()

const props = defineProps({
  error: Object as () => NuxtError
})

useSeoMeta({
  title: `${props.error?.status} ${props.error?.message} ⋅ ${app.name}`,
  ogTitle: `${props.error?.status} ${props.error?.message} ⋅ ${app.name}`
})

const dev = import.meta.dev
</script>

<template>
  <div
    v-if="error"
    class="flex h-full max-h-full w-full overflow-auto bg-zinc-50 p-3.5 font-['Reddit_Sans'] font-medium selection:bg-zinc-800 selection:text-neutral-50"
  >
    <div class="m-auto flex w-full max-w-4xl flex-col justify-between gap-3">
      <div class="flex flex-col justify-center">
        <div class="text-3xl/8 font-semibold">
          {{ error.status }}
        </div>
        <div class="text-base/5 break-all">{{ error.message }}</div>
      </div>
      <div
        v-if="dev && error.stack"
        class="flex flex-col"
      >
        <div class="text-base/5 font-medium">Error Stack:</div>
        <div
          class="overflow-auto text-sm/5"
          v-html="error.stack"
        />
      </div>
      <NuxtLink
        to="/"
        class="w-fit rounded bg-zinc-800 px-4 py-2 text-center text-sm text-neutral-50"
      >
        Return To Home Page
      </NuxtLink>
    </div>
  </div>
</template>

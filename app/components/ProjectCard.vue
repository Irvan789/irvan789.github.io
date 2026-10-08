<script setup lang="ts">
type ComponentProps = {
  title: string
  description: string
  image: string
  tags: Array<string>
}

type ComponentEmits = {
  click: []
}

const props = defineProps<ComponentProps>()
const emits = defineEmits<ComponentEmits>()
</script>

<template>
  <button
    type="button"
    class="group relative flex cursor-pointer flex-col gap-4 py-0.5 text-start font-medium"
    @click="() => emits('click')"
  >
    <img
      :src="props.image"
      class="z-1 size-7 rounded object-contain"
    />

    <div class="flex h-full flex-col">
      <div
        class="absolute -inset-4 scale-95 rounded-lg transition group-hover:scale-100 group-hover:bg-zinc-200/35"
      ></div>

      <h3 class="z-1 mb-0.5 text-base/5 font-bold">
        {{ props.title }}
      </h3>

      <div class="z-1 mb-2.5 inline-flex gap-2">
        <template
          v-for="tag in props.tags"
          :key="tag"
        >
          <span class="text-xs/3 text-neutral-700">
            {{ myTechStack[tag]?.name }}
          </span>
        </template>
      </div>

      <p class="z-1 text-sm/5 text-neutral-700">
        {{ props.description }}
      </p>
    </div>
  </button>
</template>
